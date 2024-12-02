'use server'
import { startOfMonth, subMonths, endOfMonth } from "date-fns"; 
import { connectToDatabase } from "..";
import User from "../user.modal";
import { AnyKeys } from "mongoose";

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export const getAllUsers = async (
  { limit, page, name }: { limit: number; page: number, name?: string }
) => {
  try {
    await connectToDatabase();
    
    // Pagination logic
    const skipAmount = (Number(page) - 1) * limit;
    const query = name
      ? {
          $or: [
            { firstname: { $regex: name, $options: "i" } },
            { lastname: { $regex: name, $options: "i" } },
          ],
        }
      : {};
    
    // Fetch users with pagination
    const users = await User.find(query).skip(skipAmount).limit(limit);
    const totalCount = await User.countDocuments(query);

    if (!users || users.length === 0) {
      throw new Error("No users found");
    }

    return {
      users,
      status: 200,
      totalUsers: totalCount,
      totalPages: Math.ceil(totalCount / limit),
    };
  } catch (error:any) {
    console.error("Error getting all users:", error.message || error);
    return {
      status: 400,
      message: error.message || "Error fetching users",
    };
  }
};

export const getUserDetails = async (id: string) => {
  try {
    await connectToDatabase();
    
    const user = await User.findById(id);
    
    if (!user) {
      throw new Error("User not found");
    }

    return JSON.parse(JSON.stringify({ user, status: 200 }));
  } catch (error:any) {
    console.error("Get user details error:", error.message || error);
    return { 
      status: 500, 
      message: error.message || "Internal Server Error" 
    };
  }
};

// export const calculateBookingPaymentStats = async () => {
//   try {
//     // Ensure database connection
//     await connectToDatabase();
    
//     // Fetch all users
//     const users = await User.find();

//     if (!users || users.length === 0) {
//       throw new Error("No users found in the database");
//     }

//     let totalBookingPayments = 0;
//     let totalBookingPaymentsLastMonth = 0;
//     let totalBookingPaymentsTwoMonths = 0;
//     let totalWithdrawableProfit = 0;

//     const today = new Date();
    
//     // Date ranges for last month and two months ago
//     const startOfLastMonth = startOfMonth(subMonths(today, 1));
//     const endOfLastMonth = endOfMonth(subMonths(today, 1));

//     const startOfTwoMonthsAgo = startOfMonth(subMonths(today, 2));
//     const endOfTwoMonthsAgo = endOfMonth(subMonths(today, 2));

//     // Loop through each user and calculate stats
//     for (const user of users) {
//       if (user.bookingPayments && user.bookingPayments.length > 0) {
//         // Sum total booking payments for all time
//         const allTimeBookingPayments = user.bookingPayments.reduce(
//           (sum: number, payment: any) => sum + (payment.amount || 0),
//           0
//         );
//         totalBookingPayments += allTimeBookingPayments;

//         // Sum booking payments for the last month
//         const lastMonthBookingPayments = user.bookingPayments.reduce(
//           (sum: number, payment: any) => {
//             const paymentDate = new Date(payment.date);
//             if (paymentDate >= startOfLastMonth && paymentDate <= endOfLastMonth) {
//               return sum + (payment.amount || 0);
//             }
//             return sum;
//           },
//           0
//         );
//         totalBookingPaymentsLastMonth += lastMonthBookingPayments;

//         // Sum booking payments for two months ago
//         const twoMonthsBookingPayments = user.bookingPayments.reduce(
//           (sum: number, payment: any) => {
//             const paymentDate = new Date(payment.date);
//             if (paymentDate >= startOfTwoMonthsAgo && paymentDate <= endOfTwoMonthsAgo) {
//               return sum + (payment.amount || 0);
//             }
//             return sum;
//           },
//           0
//         );
//         totalBookingPaymentsTwoMonths += twoMonthsBookingPayments;
//       }

//       // Sum the user's withdrawable profit
//       totalWithdrawableProfit += user.withdrawableAmount || 0;
//     }

//     // Return the calculated values
//     return {
//       totalBookingPayments,
//       totalBookingPaymentsLastMonth,
//       totalBookingPaymentsTwoMonths,
//       totalWithdrawableProfit,
//       status: 200,
//     };
//   } catch (error:any) {
//     console.error("Error calculating booking payment stats:", error.message || error);
//     return { 
//       status: 500, 
//       message: error.message || "Internal Server Error" 
//     };
//   }
// };


import { startOfWeek, endOfWeek,  startOfYear, endOfYear, subWeeks, subYears } from "date-fns";
import { verifyCaptchaToken } from "@/lib/captcha";
import Property from "../property.model";
import { revalidatePath } from "next/cache";


export const calculateBookingPaymentStats = async (timePeriod?: string) => {
  try {
    // Ensure database connection
    await connectToDatabase();
    
    // Fetch all users
    const users = await User.find();

    if (!users || users.length === 0) {
      throw new Error("No users found in the database");
    }

    let totalBookingPayments = 0;  // For all time (no time period restriction)
    let bookingPaymentsInPeriod = null;  // For the specified time frame, if any
    let totalBookingPaymentsLastMonth = 0;
    let totalBookingPaymentsTwoMonths = 0;
    let totalWithdrawableProfit = 0;

    // Define current date
    const today = new Date();

    // Set default start and end dates to undefined
    let startDate: Date | undefined;
    let endDate: Date | undefined;

    // Determine the date range based on the time period, if provided
    if (timePeriod) {
      switch (timePeriod.toLowerCase()) {
        case "this week":
          startDate = startOfWeek(today);
          endDate = endOfWeek(today);
          break;
        case "this month":
          startDate = startOfMonth(today);
          endDate = endOfMonth(today);
          break;
        case "last week":
          startDate = startOfWeek(subWeeks(today, 1));
          endDate = endOfWeek(subWeeks(today, 1));
          break;
        case "last month":
          startDate = startOfMonth(subMonths(today, 1));
          endDate = endOfMonth(subMonths(today, 1));
          break;
        case "last year":
          startDate = startOfYear(subYears(today, 1));
          endDate = endOfYear(subYears(today, 1));
          break;
        default:
          throw new Error("Invalid time period specified");
      }
    }

    // Loop through each user and calculate stats
    for (const user of users) {
      if (user.bookingPayments && user.bookingPayments.length > 0) {
        
        // Sum total booking payments for all time (no time frame restriction)
        const allTimeBookingPayments = user.bookingPayments.reduce(
          (sum: number, payment: any) => sum + (payment.amount || 0),
          0
        );
        totalBookingPayments += allTimeBookingPayments;

        // If a time period is defined, sum booking payments for the specified time frame
        if (startDate && endDate) {
          const timeFrameBookingPayments = user.bookingPayments.reduce(
            (sum: number, payment: any) => {
              const paymentDate = new Date(payment.date);
              if (paymentDate >= startDate && paymentDate <= endDate) {
                return sum + (payment.amount || 0);
              }
              return sum;
            },
            0
          );
          bookingPaymentsInPeriod += timeFrameBookingPayments;
        }

        // Sum booking payments for the last month
        const startOfLastMonth = startOfMonth(subMonths(today, 1));
        const endOfLastMonth = endOfMonth(subMonths(today, 1));
        const lastMonthBookingPayments = user.bookingPayments.reduce(
          (sum: number, payment: any) => {
            const paymentDate = new Date(payment.date);
            if (paymentDate >= startOfLastMonth && paymentDate <= endOfLastMonth) {
              return sum + (payment.amount || 0);
            }
            return sum;
          },
          0
        );
        totalBookingPaymentsLastMonth += lastMonthBookingPayments;

        // Sum booking payments for two months ago
        const startOfTwoMonthsAgo = startOfMonth(subMonths(today, 2));
        const endOfTwoMonthsAgo = endOfMonth(subMonths(today, 2));
        const twoMonthsBookingPayments = user.bookingPayments.reduce(
          (sum: number, payment: any) => {
            const paymentDate = new Date(payment.date);
            if (paymentDate >= startOfTwoMonthsAgo && paymentDate <= endOfTwoMonthsAgo) {
              return sum + (payment.amount || 0);
            }
            return sum;
          },
          0
        );
        totalBookingPaymentsTwoMonths += twoMonthsBookingPayments;
      }

      // Sum the user's withdrawable profit
      totalWithdrawableProfit += user.withdrawableAmount || 0;
    }

    // Return the calculated values
    return {
      totalBookingPayments,  // For all time (no period restriction)
      bookingPaymentsInPeriod,  // Total payments in the specified time frame (renamed), if any
      totalBookingPaymentsLastMonth,
      totalBookingPaymentsTwoMonths,
      totalWithdrawableProfit,
      status: 200,
    };
  } catch (error: any) {
    console.error("Error calculating booking payment stats:", error.message || error);
    return { 
      status: 500, 
      message: error.message || "Internal Server Error" 
    };
  }
};




export async function verifyCaptcha(
  token: string | null,
) {
  if (!token) {
    return {
      success: false,
      message: "CAPTCHA Token not found",
    };
  }

  // Verify the token
  const captchaData = await verifyCaptchaToken(token);

  if (!captchaData) {
    return {
      success: false,
      message: "Captcha Verification Failed",
    };
  }

  if (!captchaData.success || captchaData.score < 0.5) {
    return {
      success: false,
      message: "Captcha Verification Failed",
      errors: !captchaData.success ? captchaData["error-codes"] : undefined,
    };
  }
  return {
    success: true,
    message: "verified!",
  };
}


export const deleteUserAccount = async (id:string) => {

  try {

    await connectToDatabase();
    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    const userProperties = await Property.deleteMany({ owner: user._id });
    console.log(
      `${userProperties.deletedCount} properties listed by the user were deleted.`
    );
    await User.findByIdAndDelete(id);
    revalidatePath('/customers');
    return {
      message: "User Deleted Successfully",
      status: 200
    }
  } 
  catch (error) {
    console.log(error);
    return {
      message:'error deleting user',
      status: 400
    }
  }

}
      






