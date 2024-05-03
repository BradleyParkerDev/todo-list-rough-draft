import  { pgTable, text, uuid, timestamp }  from 'drizzle-orm/pg-core';
import User from './users';

const TodoList = pgTable('todo_lists', {
    id: uuid('id').primaryKey().defaultRandom().unique(), // UUID v4 primary key
    listTitle: text('list_title'),
    userId: text('user_id')
      .references(() => User.id) // References the `id` column in the `users` table
      .notNull(),
});

export default TodoList;