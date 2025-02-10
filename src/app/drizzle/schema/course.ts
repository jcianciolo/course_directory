import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const courseTable = pgTable("courses", {
    id: uuid().primaryKey().defaultRandom(),
    name: text().notNull(),
    description: text().notNull(),
    createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp({ withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date()),
})

export const CourseRelationships = relations(courseTable, ({ one, many }) => ({
    test: one()
}) )