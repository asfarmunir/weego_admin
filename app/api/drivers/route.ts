import { connectToDatabase } from '@/lib/database';
import User from '@/lib/database/user.modal';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDatabase();
    
    // Get all users with driver profiles (both verified and unverified)
    const drivers = await User.find({ 
      driverProfile: { $exists: true, $ne: null } 
    }).select('-password');
    
    return NextResponse.json(drivers, { status: 200 });
  } catch (error) {
    console.error('Error fetching drivers:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}