import React from 'react'
import { db } from '@server/database/db';
import User from '@server/database/schemas/Users';
import { eq } from 'drizzle-orm';




const register = async () => {

    const newUser = {
        firstName: "Bradley",
        lastName: "Parker",
        emailAddress: "b@p.com",
        userName: "bp",
        password: "123"
    }

    return (
        await db.insert(User).values({
            firstName: "Bradley",
            lastName: "Parker",
            emailAddress: "b@p.com",
            userName: "bp",
            password: "123"
        })
    )
}

export default register