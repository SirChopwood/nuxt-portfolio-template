import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const test = sqliteTable("test", {
    id: integer().primaryKey({autoIncrement: true}),
    name: text().notNull(),
})