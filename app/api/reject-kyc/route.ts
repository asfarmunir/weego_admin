// app/api/reject-kyc/route.ts
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
    
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { 
        $set: { 
          'kyc.verificationStatus': 'rejected',
          'kyc.rejectionReason': reason
        } 
      },
      { new: true }
    ).select('-password');
    
    if (!updatedUser) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error('Error rejecting KYC:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}