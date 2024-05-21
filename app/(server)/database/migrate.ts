import { migrate } from 'drizzle-orm/neon-http/migrator';
import { db } from './db';
import User from './schemas/Users';

const main = async () =>{

    // This will run migrations on the database, skipping the ones already applied
    // await migrate(db, { migrationsFolder: './app/(server)/database/migrations' });
    return db.insert(User).values({
        firstName: "Bradley",
        lastName: "Parker",
        emailAddress: "b@p.com",
        userName: "bp",
        password: "123"
    })
    console.log("Hello.")

}
main().catch((err) => {
    console.error(err);
    process.exit(1);
})