'use server';
import { auth } from '@clerk/nextjs/server';
import { Record } from '@/types/Record';
import { fecthUserRecord } from '@/lib/record';

async function getRecords(): Promise<{
  records?: Record[];
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    const records = await fecthUserRecord(userId);
    return { records };
  } catch (error) {
    console.error('Error fetching records:', error); 
    return { error: 'Database error' };
  }
}

export default getRecords;
