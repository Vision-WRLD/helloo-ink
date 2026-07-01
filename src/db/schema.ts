import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 100 }).notNull(),
  lastName: varchar("last_name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  preferredArtist: varchar("preferred_artist", { length: 100 }),
  placement: varchar("placement", { length: 100 }).notNull(),
  size: varchar("size", { length: 50 }).notNull(),
  style: varchar("style", { length: 100 }).notNull(),
  budget: varchar("budget", { length: 100 }),
  description: text("description"),
  referenceUrls: text("reference_urls"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 200 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  subject: varchar("subject", { length: 255 }),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
