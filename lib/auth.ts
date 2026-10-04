import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

export type SessionUser = {
  id: string;
  email: string;
  name: string;
  role: string;
};

export function signToken(payload: SessionUser) {
  return jwt.sign(payload, process.env.JWT_SECRET || 'dev-secret', {
    expiresIn: '7d',
  });
}

export function verifyToken(token: string) {
  return jwt.verify(token, process.env.JWT_SECRET || 'dev-secret') as SessionUser;
}

export function getTokenFromRequest(req: NextRequest) {
  const token = req.cookies.get('athar_session')?.value;
  if (!token) return null;

  try {
    return verifyToken(token);
  } catch {
    return null;
  }
}
