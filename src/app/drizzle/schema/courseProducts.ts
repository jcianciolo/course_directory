import { pgTable, uuid } from "drizzle-orm/pg-core";
import { CourseTable } from "./course";
import { ProductTable } from "./product";

export const CourseProductTable = pgTable("course_products", {
    courseId: uuid().notNull().references(() => CourseTable.id, { onDelete: "restrict" }),
    productId: uuid().notNull().references(() => ProductTable.id, { onDelete: "cascade" }),
});