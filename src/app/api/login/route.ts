import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { sign } from 'jsonwebtoken';

const JWT_SECRET = process.env.ADMIN_SECRET || 'fallback-secret';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();
    
    if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
      // Create JWT token
      const token = sign({ loggedIn: true }, JWT_SECRET, { expiresIn: '1h' });
      
      // Set HTTP-only cookie
      const cookieStore = await cookies();
      cookieStore.set('auth-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 3600 // 1 hour
      });
      
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
} 