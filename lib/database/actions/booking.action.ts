'use server'
import { connectToDatabase } from '..';
import { revalidatePath } from 'next/cache';
import Booking from '../booking.model';
import Property from '../property.model';

export async function createBooking(data:any) {
    try {
        await connectToDatabase();
        const booking = new Booking(data);
        console.log("🚀 ~ createBooking ~ booking:", booking)
        await booking.save();
        return JSON.parse(JSON.stringify({booking, status: 200}));
    } catch (error) {
        console.error("Error creating booking", error);
        return JSON.parse(JSON.stringify({status: 400, message: "Error creating booking"}));
    }
}

export const getUserBookings = async (userId: string) => {
    try {
        await connectToDatabase();
        const bookings = await Booking.find({user: userId}).populate('property');
        return JSON.parse(JSON.stringify({bookings, status: 200}));
    } catch (error) {
        console.error("Error getting user bookings", error);
        return JSON.parse(JSON.stringify({status: 400, message: "Error getting user bookings"}));
    }
}

export const addRatings = async (bookingId: string, rating: number, userId: string) => {
    try {
        // Connect to the database
        await connectToDatabase();

        // Find the booking by ID
        const booking = await Booking.findById(bookingId);
        if (!booking) {
            return { status: 404, message: "Booking not found" };
        }

        // Mark the booking as reviewed
        booking.reviewed = true;
        await booking.save();

        // Find the associated property
        const property = await Property.findById(booking.property);
        if (!property) {
            return { status: 404, message: "Property not found" };
        }

        const existingReviewIndex = property.reviews.findIndex((review:any) => review.user.toString() === userId);

        if (existingReviewIndex !== -1) {
            property.reviews[existingReviewIndex].rating = rating;
        } else {
            property.reviews.push({
                user: userId,
                rating: rating
            });
        }

        await property.save();
        revalidatePath('/account')
        return { status: 200, message: "Rating updated successfully" };
    } catch (error) {
        console.error("Error adding/updating rating", error);
        return { status: 400, message: "Error adding/updating rating" };
    }
};


export const getTopPropertiesByOwner = async (userId: string) => {
  try {
    const result = await Booking.aggregate([
      {
        $lookup: {
          from: 'properties', // Join with the Property collection
          localField: 'property', // Link to the 'property' field in bookings
          foreignField: '_id', // Corresponding _id in Property collection
          as: 'propertyInfo', // Alias for the joined property data
        },
      },
      { $unwind: '$propertyInfo' }, // Unwind to access individual property details
      {
        $match: { 'propertyInfo.owner': userId }, // Match properties where the owner matches the userId
      },
      {
        $group: {
          _id: '$propertyInfo._id', // Group by property ID
          totalBookings: { $sum: 1 }, // Count the number of bookings per property
          propertyDetails: { $first: '$propertyInfo' }, // Keep property details for the result
        },
      },
      { $sort: { totalBookings: -1 } }, // Sort by total bookings in descending order
      { $limit: 3 }, // Limit to the top 3 properties
    ]);

    return JSON.parse(JSON.stringify({ topCities: result, status: 200 }));
  } catch (error) {
    console.error('Error fetching top properties by owner', error);
    throw new Error('Failed to fetch top properties for the user');
  }
};


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// export const getAllBookings = async (
//   { limit, page }: { limit: number; page: number }
// ) => {
//     try {
//         await connectToDatabase();
//     const skipAmount = (Number(page) - 1) * limit;

//         const bookings = await Booking.find().populate('property').skip(skipAmount)
//       .limit(limit);

//     const bookingCount = await Booking.countDocuments(); // Count based on the same query

//         return JSON.parse(JSON.stringify({bookings,
//            status: 200,
//            totalBookings: bookingCount,
//         totalPages: Math.ceil(bookingCount / limit),
//         }));
//     } catch (error) {
//         console.error("Error getting all bookings", error);
//         return JSON.parse(JSON.stringify({status: 400, message: "Error getting all bookings"}));
//     }
// }

export const getAllBookings = async (
  { limit, page, propertyName, period }: { limit: number; page: number; propertyName?: string; period?: 'upcoming' | 'completed' }
) => {
  try {
    await connectToDatabase();
    const skipAmount = (Number(page) - 1) * limit;

    // Create the base query object for searching properties
    let propertyQuery = {};
    if (propertyName && propertyName.trim()) {
      propertyQuery = { name: { $regex: new RegExp(propertyName, "i") } };
    }

    // First, find all matching properties based on the search query
    const matchingProperties = await Property.find(propertyQuery).select("_id");

    // If no matching properties are found, return an empty response
    if (matchingProperties.length === 0) {
      return JSON.parse(
        JSON.stringify({
          bookings: [],
          status: 200,
          totalBookings: 0,
          totalPages: 0,
        })
      );
    }

    // If there are matching properties, use their IDs to search the bookings
    const propertyIds = matchingProperties.map((property) => property._id);
    const bookingQuery: any = { property: { $in: propertyIds } }; // Use 'any' to allow dynamic queries

    // Determine the date for filtering bookings based on the period
    const today = new Date();

    if (period === 'completed') {
      // For completed bookings, select those with checkOut dates before today
      bookingQuery.checkOut = { $lt: today };
    } else if (period === 'upcoming') {
      // For upcoming bookings, select those with checkOut dates on or after today
      bookingQuery.checkOut = { $gte: today };
    }
    // If period is undefined, no additional filtering is needed

    // Count the total number of bookings that match the query
    const totalBookings = await Booking.countDocuments(bookingQuery);

    // Fetch bookings with pagination
    const bookings = await Booking.find(bookingQuery)
      .populate({
        path: "property", // Populate the property field
        select: "name pricePerNight", // Optionally select specific fields
      })
      .skip(skipAmount)
      .limit(limit)
      .exec();

    // Return the paginated and filtered result
    return JSON.parse(
      JSON.stringify({
        bookings,
        status: 200,
        totalBookings,
        totalPages: Math.ceil(totalBookings / limit),
      })
    )
  } catch (error) {
    console.error("Error getting all bookings", error);
    return { status: 400, message: "Error getting all bookings" };
  }
};



export const calculateTotalBookingAmount = async () => {
  try {
    // Use Mongoose's aggregation to sum the totalAmount for all bookings
    const result = await Booking.aggregate([
      {
        $group: {
          _id: null, // No grouping by specific field, just sum everything
          totalAmount: { $sum: "$totalAmount" }, // Sum the totalAmount field
        },
      },
    ]);

    // If there are no bookings, return 0
    const totalBookingAmount = result.length > 0 ? result[0].totalAmount : 0;

    return { totalBookingAmount };
  } catch (error) {
    console.error("Error calculating total booking amount:", error);
    throw new Error("Error calculating total booking amount");
  }
};




export const deleteUserBooking = async (bookingId: string) => {
  try {
    await connectToDatabase();

    // Fetch the booking
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      throw new Error("Booking not found");
    }

    const currentDate = new Date();

    if (booking.checkIn <= currentDate) {
      // If the check-in date has passed, delete the booking
      await Booking.findByIdAndDelete(bookingId);
    } else {
      // If the check-in date is in the future, update bookedDates on the property
      const property = await Property.findById(booking.property);
      if (!property) {
        throw new Error("Property associated with the booking not found");
      }

      // Remove the dates between checkIn and checkOut from the bookedDates array
      const checkInDate = new Date(booking.checkIn);
      const checkOutDate = new Date(booking.checkOut);
      const bookedDatesToRemove: Date[] = [];

      for (
        let date = new Date(checkInDate);
        date <= checkOutDate;
        date.setDate(date.getDate() + 1)
      ) {
        bookedDatesToRemove.push(new Date(date)); // Collect dates to remove
      }

      

      property.bookedDates = property.bookedDates.filter(
        (date:any) =>
          !bookedDatesToRemove.some(
            (d) => new Date(d).toISOString() === new Date(date).toISOString()
          )
      );


      // Save the updated property
      await property.save();

      // Delete the booking
      await Booking.findByIdAndDelete(bookingId);
    }

    revalidatePath("/orders");
    return {
      message: "Booking deleted successfully.",
      status: 200,
    };
  } catch (error: any) {
    console.error("Error deleting booking:", error.message);
    return {
      message: "Error deleting booking.",
      status: 400,
      error: error.message,
    };
  }
};