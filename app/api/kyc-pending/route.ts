// app/api/kyc-pending/route.ts
import { connectToDatabase } from '@/lib/database';
import User from '@/lib/database/user.modal';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDatabase();
    
    const users = await User.find({ 
      'kyc.verificationStatus': 'pending',
      kyc: { $exists: true }
    }).select('-password');
    
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('Error fetching pending KYC users:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}