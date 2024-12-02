"use server";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "..";
import Payout from "../payout.model";
import User from "../user.modal";
import Booking from "../booking.model";
import { sendEmail } from "@/lib/sendEmail";


//----------------------------------------------------------------

export const getAllPayouts = async ({ limit , page = 1, status }:{
    limit: number;
    page: number;
    status?: string;
}) => {
    try {
        await connectToDatabase();

        const query = status ? { status } : {};

        const payouts = await Payout.find(
            query
        ).populate("user")
            .sort({ createdAt: -1 })
            .limit(limit)
            .skip(limit * (page - 1));

        const totalPayouts = await Payout.countDocuments(
            query
        );

        return JSON.parse(JSON.stringify({ payouts, 
            totalPayouts,
            totalPages: Math.ceil(totalPayouts / limit),
         }));
    } catch (error) {
        console.error("Error getting payouts", error);
        return JSON.parse(JSON.stringify({ status: 400, message: "Error getting payouts" }));
    }
}



export const updatePayoutStatus = async (id: string, status: string) => {
    try {
        // Connect to the database
        await connectToDatabase();

        // Find the payout by ID and populate the user details
        const payout = await Payout.findById(id).populate('user');
        if (!payout) {
            return JSON.parse(JSON.stringify({ status: 404, message: "Payout not found" }));
        }

        // Update payout status
        payout.status = status;
        await payout.save();

        // Revalidate the payouts page
        revalidatePath('/payouts');

        // Send an email to the user informing them of the status update
        const subject = `Your Payout Status Has Been Updated to ${status}`;
        const emailTemplate = generatePayoutEmailTemplate(payout.user.firstname, payout.amount, status);
        await sendEmail(
            payout.user.email
          , subject, emailTemplate);

        return JSON.parse(JSON.stringify({ status: 200, message: "Payout status updated and email sent" }));

    } catch (error) {
        console.error("Error updating payout status", error);
        return JSON.parse(JSON.stringify({ status: 400, message: "Error updating payout status" }));
    }
};

// Generate a simple email template to notify the user
const generatePayoutEmailTemplate = (userName: string, amount: number, status: string) => {
    const statusText = status === "completed" ? "successfully completed" : status === "rejected" ? "rejected" : "pending";
    return `
      <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
        <h2 style="color: #4CAF50;">Hello ${userName},</h2>
        <p>We wanted to inform you that your payout of <strong>$${amount}</strong> has been <strong>${statusText}</strong>.</p>
        <p>If you have any questions, feel free to contact our support team.</p>
        <p>Thank you for using our services!</p>
        <br />
        <p>Best regards,</p>
        <p><strong>Hunt Grounds</strong></p>
        <p style="font-size: 12px; color: #888;">This is an automated email, please do not reply to this message.</p>
      </div>
    `;
};



// this fn returns the reffered users and their total booking amounts
export const calculateReferralBookingTotals = async (
  {
    limit,
    affiliatePage,
     affiliateName
  }: {
    limit: number;
    affiliatePage: number;
    affiliateName: string;
  }
) => {
     console.log("🚀 ~ affiliateName:", affiliateName)
  try {
    const skipAmount = limit * (Number(affiliatePage) - 1);
    // Step 1: Find users who were referred by someone and used their referral
            interface UserQuery {
          referedBy: { $ne: null };
          referalUsed: true;
          $or?: Array<{ firstname: { $regex: string, $options: string } } | { lastname: { $regex: string, $options: string } }>;
          $and?: Array<{ firstname: { $regex: string, $options: string } } | { lastname: { $regex: string, $options: string } }>;
        }

        const nameParts = affiliateName.trim().split(' ');

        let query: UserQuery = {
          referedBy: { $ne: null }, // Users who have a referrer
          referalUsed: true,
        };

        if (nameParts.length === 1) {
          // If only one part (either firstname or lastname)
          query.$or = [
            { firstname: { $regex: nameParts[0], $options: 'i' } }, // Match first name
            { lastname: { $regex: nameParts[0], $options: 'i' } },  // Match last name
          ];
        } else if (nameParts.length === 2) {
          // If two parts (firstname and lastname)
          query.$and = [
            { firstname: { $regex: nameParts[0], $options: 'i' } }, // Match first name
            { lastname: { $regex: nameParts[1], $options: 'i' } },  // Match last name
          ];
        } else if (nameParts.length >= 3) {
          // If three or more parts (firstname and combined lastname)
          const firstName = nameParts[0]; // First word as firstname
          const lastName = nameParts.slice(1).join(' '); // Combine the rest for lastname

          query.$and = [
            { firstname: { $regex: firstName, $options: 'i' } }, // Match first name
            { lastname: { $regex: lastName, $options: 'i' } },   // Match full last name (second and third words)
          ];
        }
                  

    const referredUsers = await User.find(query)
      .limit(limit)
      .skip(skipAmount)
      .select("firstname lastname email profileImage")
      // Select relevant user fields

    
     // Select relevant user fields

    let totalAmountsPerUser = []; // Array to store results

    // Step 2: Loop over each referred user
    for (const user of referredUsers) {
      // Step 3: Find all bookings for the current user
      const bookings = await Booking.find({ user: user._id });

      // Step 4: Sum the total amounts of the user's bookings
      const totalAmount = bookings.reduce((sum, booking) => {
        return sum + (booking.totalAmount || 0); // Add each booking's totalAmount
      }, 0);

      

      // Step 5: Store the user details and total booking amount
      totalAmountsPerUser.push({
        userId: user._id,
        username: `${user.firstname} ${user.lastname}`, // Combine first and last names
        email: user.email,
        profileImage: user.profileImage || null, // Handle case where profileImage might be null
        totalBookingAmount: totalAmount,
      });

    }

    const totalReferals = await User.countDocuments({  referedBy: { $ne: null }, referalUsed: true });

    const totalPages = Math.ceil(totalReferals / limit);

    // Return the final result
    return JSON.parse(JSON.stringify({totalAmountsPerUser,
      totalPages,
    }));
  } catch (error) {
    console.error("Error calculating referral booking totals:", error);
    throw new Error("Error calculating referral booking totals");
  }
};


// export const calculateTotalReferralEarnings = async () => {
//   try {
//     // Step 1: Find all users
//     const users = await User.find({});

//     let totalReferralEarnings = 0; // Variable to accumulate the total referral earnings

//     // Step 2: Loop through each user and sum up their referral earnings
//     for (const user of users) {
//       if (user.referralEarnings && user.referralEarnings.length > 0) {
//         // Step 3: Sum the referral earnings for this user
//         const userTotalEarnings = user.referralEarnings.reduce((sum:number, earning:any) => {
//           return sum + (earning.amount || 0);
//         }, 0);

//         // Step 4: Add this user's total earnings to the overall total
//         totalReferralEarnings += userTotalEarnings;
//       }
//     }

//     // Return the final total referral earnings
//     return totalReferralEarnings;
//   } catch (error) {
//     console.error("Error calculating total referral earnings:", error);
//     throw new Error("Error calculating total referral earnings");
//   }
// };
interface CommissionWithUserDetails {
  amount: number;
  username: string;
  email: string;
  profileImage: string | null;
}



export const getReferralEarningsData = async ({
  limit = 1,
  page,
  commissionateName
}: {
  limit: number;
  page: number;
  commissionateName: string;
}) => {
  try {
    // Step 1: Find all users
const nameParts = commissionateName.trim().split(' ');

let query = {};

if (nameParts.length === 1) {
  // If only one part (either firstname or lastname)
  query = {
    $or: [
      { firstname: { $regex: nameParts[0], $options: 'i' } }, // Match first name
      { lastname: { $regex: nameParts[0], $options: 'i' } },  // Match last name
    ],
  };
} else if (nameParts.length === 2) {
  // If two parts (firstname and lastname)
  query = {
    firstname: { $regex: nameParts[0], $options: 'i' }, // Match first name
    lastname: { $regex: nameParts[1], $options: 'i' },  // Match last name
  };
} else if (nameParts.length >= 3) {
  // If three or more parts (firstname and combined lastname)
  const firstName = nameParts[0]; // First word as firstname
  const lastName = nameParts.slice(1).join(' '); // Combine the rest for lastname

  query = {
    firstname: { $regex: firstName, $options: 'i' }, // Match first name
    lastname: { $regex: lastName, $options: 'i' },   // Match full last name (second and third words)
  };
}

// Now you can run your query to search for users
const users = await User.find(query);

    let allCommissionDetails: CommissionWithUserDetails[] = []; // Array to store all commission details

    // Step 2: Loop through each user and extract their referral earnings
    for (const user of users) {
      if (user.referralEarnings && user.referralEarnings.length > 0) {
        // Step 3: For each referral earning, create a record with the amount and user details
        user.referralEarnings.forEach((earning: { amount: number }) => {
          if (earning.amount) {
            allCommissionDetails.push({
              amount: earning.amount,
              username: `${user.firstname || ""} ${user.lastname || ""}`.trim(), // Concatenate first and last name
              email: user.email,
              profileImage: user.profileImage || null, // Handle case where profileImage might be null
            });
          }
        });
      }
    }

    // Step 4: Apply pagination to the combined referral earnings data
    const skipAmount = limit * (Number(page) - 1);
    const paginatedCommissionDetails = allCommissionDetails.slice(
      skipAmount,
      skipAmount + limit
    );

    // Return the paginated list of commissions with user details and total count
    return JSON.parse(
      JSON.stringify({
        commissions: paginatedCommissionDetails,
        total: allCommissionDetails.length, // Total number of referral earnings
        totalPages: Math.ceil(allCommissionDetails.length / limit),
        status: 200,
      })
    );
  } catch (error) {
    console.error("Error fetching referral earnings data:", error);
    throw new Error("Error fetching referral earnings data");
  }
};


export const getUserPayoutSummary = async (userId: string) => {
  try {
    // Step 1: Connect to the database
    await connectToDatabase();

    // Step 2: Find all payouts associated with the user ID
    const payouts = await Payout.find({ user: userId });

    // Step 3: Calculate the total summed amount of all payouts
    const totalAmount = payouts.reduce((sum, payout) => sum + payout.amount, 0);

    // Step 4: Get the total number of payouts
    const numberOfPayouts = payouts.length;

    // Step 5: Return the total amount and number of payouts
    return JSON.parse(
      JSON.stringify({
        totalAmount,
        numberOfPayouts,
        status: 200,
        message: 'Payout summary fetched successfully',
      })
    );
  } catch (error) {
    console.error('Error fetching user payout summary:', error);
    return JSON.parse(
      JSON.stringify({
        status: 400,
        message: 'Error fetching user payout summary',
      })
    );
  }
};