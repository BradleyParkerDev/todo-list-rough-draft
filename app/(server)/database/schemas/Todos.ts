import { pgTable, text, uuid, timestamp } from 'drizzle-orm/pg-core';
import User from './Users';
import TodoList from './TodoLists';

const Todo = pgTable('todos', {
	id: uuid('id').primaryKey().defaultRandom().unique(), // UUID v4 primary key
	label: text('label'), // Corrected typo from 'lable' to 'label'
	content: text('content').notNull(), // Content of the todo item
	user_id: uuid('user_id') // UUID type to match User.id
	.references(() => User.id)
	.notNull(),
	todoListId: uuid('todo_list_id') // UUID type to match TodoList.id
	.references(() => TodoList.id),
	lastUpdated: timestamp('last_updated').defaultNow().notNull() // Automatically sets current timestamp on update
});

export default Todo;
