import React from 'react'
import { db } from '@server/database/db';
import User from '@server/database/schemas/Users';
import { eq } from 'drizzle-orm';

const userFirstName = 'Bradley'



const deleteUser = () => {
    return (
        db.delete(User).where(eq(User.firstName, userFirstName))
    )
}

export default deleteUser