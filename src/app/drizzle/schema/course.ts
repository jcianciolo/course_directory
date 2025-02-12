import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { id, createdAt, updatedAt } from "../schemaHelpers";
import { CourseProductTable } from "./courseProduct";

export const CourseTable = pgTable("courses", {
    id,
    name: text().notNull(),
    description: text().notNull(),
    createdAt,
    updatedAt,
})

export const CourseRelationships = relations(CourseTable, ({ many }) => ({
        courseProducts: many(CourseProductTable)
    
}) )