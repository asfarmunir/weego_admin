import { connectToDatabase } from '@/lib/database';
import User from '@/lib/database/user.modal';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json(
        { message: 'User ID is required' },
        { status: 400 }
      );
    }

    await connectToDatabase();
    
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { 
        $set: { 
          'driverProfile.isVerified': true,
          'driverProfile.verificationStatus': 'verified',
          'isDriver': true
        } 
      },
      { new: true }
    );
    
    if (!updatedUser) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error('Error verifying driver:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}