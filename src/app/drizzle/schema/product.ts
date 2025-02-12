import { pgTable, text, integer, timestamp, uuid, pgEnum } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { id, createdAt, updatedAt } from "../schemaHelpers";
import { int } from "drizzle-orm/mysql-core";

export const productStatuses = ["public", "private"] as const;
export type ProductStatus = typeof productStatuses[number];
export const productStatusEnum = pgEnum("product_status", productStatuses);

export const ProductTable = pgTable("products", {
    id,
    name: text().notNull(),
    description: text().notNull(),
    imageUrl: text().notNull(),
    priceInDollars: int().notNull(),
    status: productStatusEnum().notNull().default("private"),
    createdAt,
    updatedAt,
})

export const ProductRelationships = relations(ProductTable, ({ one, many }) => ({
    test: one()
}) )