import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';


// Load environment variables from .env file
dotenv.config();

const connectionString = process.env.TODO_LIST_DB as string;

if (!connectionString) {
	throw new Error('Environment variable TODO_LIST_DB is not defined');
}

export default defineConfig({
	schema: './app/(server)/database/schemas',
	out: './app/(server)/database/migrations',
	dialect: 'postgresql',
	dbCredentials: {
	url: connectionString,
	},

	verbose: true,
	strict: true,
})