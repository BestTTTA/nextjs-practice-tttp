import { NextResponse } from 'next/server'
import { User } from '@/types/user'

const mockUsers: User[] = [
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Jane Smith',
  },
  {
    id: 3,
    name: 'Bob Johnson',
  }
];

export async function GET() {
  return NextResponse.json(mockUsers);
}
