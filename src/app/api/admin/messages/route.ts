import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verify } from 'jsonwebtoken';
import dbConnect from '@/lib/db';
import Contact from '@/lib/models/Contact';

const JWT_SECRET = process.env.ADMIN_SECRET || 'fallback-secret';

// Authentication middleware
async function authenticateUser(request: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token')?.value;
  
  if (!token) {
    return false;
  }
  
  try {
    const decoded = verify(token, JWT_SECRET) as { loggedIn?: boolean };
    return decoded.loggedIn === true;
  } catch {
    return false;
  }
}

export async function GET(request: NextRequest) {
  try {
    if (!(await authenticateUser(request))) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await dbConnect();
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    return NextResponse.json(contacts);
  } catch (error) {
    console.error('Get messages error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve messages' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    if (!(await authenticateUser(request))) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: 'Message ID required' },
        { status: 400 }
      );
    }

    await dbConnect();
    await Contact.findByIdAndDelete(id);
    
    return NextResponse.json({
      success: true,
      message: 'Message deleted successfully!'
    });
  } catch (error) {
    console.error('Delete message error:', error);
    return NextResponse.json(
      { error: 'Failed to delete message' },
      { status: 500 }
    );
  }
} 