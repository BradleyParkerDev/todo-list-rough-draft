import  { pgTable, text, uuid, timestamp }  from 'drizzle-orm/pg-core';
import User from './users' ;
import TodoList from './TodoLists';

const Todo = pgTable('todos', {
    id: uuid('id').primaryKey().defaultRandom().unique(), // UUID v4 primary key
    content: text('content').notNull(), // Content of the todo item
    user_id: text('user_id')
      .references(() => User.id) // References the `id` column in the `users` table
      .notNull(),
    todoListId: text('todo_list_id').references(() => TodoList.id), // References the `id` column in the `users` table
    lastUpdated: timestamp('last_updated').defaultNow().notNull() // Automatically sets current timestamp on update
});

export default  Todo;
