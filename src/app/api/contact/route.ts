import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Contact from '@/lib/models/Contact';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    
    const { name, email, message } = await request.json();
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newContact = await Contact.create({ name, email, message });
    
    return NextResponse.json({
      success: true,
      message: 'Message submitted successfully!',
      data: newContact
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    console.error('Error details:', JSON.stringify(error, null, 2));
    return NextResponse.json(
      { error: 'Failed to save message', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 