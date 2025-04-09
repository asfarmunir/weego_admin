import { connectToDatabase } from '@/lib/database';
import User from '@/lib/database/user.modal';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { userId, reason } = await req.json();

    if (!userId || !reason) {
      return NextResponse.json(
        { message: 'User ID and reason are required' },
        { status: 400 }
      );
    }

    await connectToDatabase();
    
    // First update the driver profile with rejection reason
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    if (user.driverProfile) {
      user.driverProfile.verificationStatus = 'rejected';
      user.driverProfile.rejectionReason = reason;
      await user.save();
    }
    
    // Option 2: Keep the profile with rejected status (better for records)
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { 
        $set: { 
          'driverProfile.verificationStatus': 'rejected',
          'driverProfile.rejectionReason': reason,
          'isDriver': false
        } 
      },
      { new: true }
    );
    
    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error('Error rejecting driver:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}