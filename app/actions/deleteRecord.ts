'use server';
import { db } from '@/lib/db';
import { deleteRecords } from '@/lib/deleteRecord';
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';


async function deleteRecord(recordId: string): Promise<{
  message?: string;
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    await deleteRecords(recordId)

    revalidatePath('/');

    return { message: 'Record deleted' };
  } catch (error) {
    console.error('Error deleting record:', error);
    return { error: 'Database error' };
  }
}

export default deleteRecord;
