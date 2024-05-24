import { pgTable, text } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { createInsertSchema } from 'drizzle-zod';

export const accounts = pgTable('accounts', {
  id: text('id').primaryKey(),
  plaidId: text('plaid_id'),
  name: text('name').notNull(),
  userId: text('user_id').notNull().default(sql`requesting_user_id()`).unique(),
});

export const insertAccountSchema = createInsertSchema(accounts);
