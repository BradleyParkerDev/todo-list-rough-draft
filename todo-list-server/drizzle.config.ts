import { defineConfig } from 'drizzle-kit'

export default defineConfig({
 schema: "./database/schemas",
 out: "./database/migrations",
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.TODO_LIST_DB as string
  },
  verbose: true,
  strict: true,
})