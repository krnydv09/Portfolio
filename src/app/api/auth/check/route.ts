import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.ADMIN_SECRET || 'fallback-secret';

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token')?.value;

  if (!token) {
    return NextResponse.json({ loggedIn: false });
  }

  try {
    const decoded = verify(token, JWT_SECRET) as { loggedIn?: boolean };
    return NextResponse.json({ loggedIn: decoded.loggedIn === true });
  } catch {
    return NextResponse.json({ loggedIn: false });
  }
} 