"use client"
import db from '@/config/db';
import { users } from '@/config/schema'; // Cambiado de Users a users
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import { useEffect } from 'react';

const Provider = ({children}) => {

  const { user } = useUser()
  useEffect(() => {
    user && isNewUser()
  }, [user])
  
  const isNewUser = async () => {
    try {
      const query = db.select().from(users).where(eq(users.email, user?.primaryEmailAddress?.emailAddress));
      console.log('Generated SQL Query:', query.toSQL()); // Debugging SQL query

      const result = await query;
      console.log(result);

      if (!result[0]) {
        await db.insert(users).values({
          name: user?.fullName,
          email: user?.primaryEmailAddress?.emailAddress,
          imageUrl: user?.imageUrl,
        });
      } else {
        console.log('User already exists.');
      }
    } catch (error) {
      console.error('Error in isNewUser:', error);
    }
  }
  return (
    <div>{children}</div>
  )
}

export default Provider