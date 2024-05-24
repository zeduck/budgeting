import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('accounts', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  userId: text('user_id').notNull(),
});
