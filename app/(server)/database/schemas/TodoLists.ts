import { pgTable, text, uuid } from 'drizzle-orm/pg-core';
import User from './Users';

const TodoList = pgTable('todo_lists', {
	id: uuid('id').primaryKey().defaultRandom().unique(), // UUID v4 primary key
	listName: text('list_name').notNull(), // Added .notNull() for better schema definition
	userId: uuid('user_id') // UUID type to match User.id
	.references(() => User.id)
	.notNull(),
});

export default TodoList;
