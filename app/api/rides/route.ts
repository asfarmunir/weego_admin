import { connectToDatabase } from '@/lib/database';
import Ride from '@/lib/database/ride.model';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDatabase();
    
    // Get all rides with populated user and driver information
    const rides = await Ride.find({})
      .populate('userId', 'firstname lastname email phoneNumber')
      .populate('driverId', 'firstname lastname email phoneNumber')
      .sort({ createdAt: -1 }); // Sort by newest first
    
    return NextResponse.json(rides, { status: 200 });
  } catch (error) {
    console.error('Error fetching rides:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}