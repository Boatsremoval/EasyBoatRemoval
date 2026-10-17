import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Quote schema for form submissions
export const quoteSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().optional(),
  boatSize: z.string().min(1, "Boat length is required"),
  engineType: z.string().min(1, "Engine type is required"),
  engineCount: z.string().min(1, "Number of engines is required"),
  boatLocation: z.string().min(1, "Please say how the boat is located"),
  addressLine1: z.string().min(1, "Address is required"),
  addressLine2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(1, "Zip code is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.union([z.literal(""), z.string().email("Please enter a valid email")]).optional(),
  images: z.array(z.object({
    filename: z.string(),
    content: z.string(), // base64 encoded content
  })).optional(),
});

export type QuoteRequest = z.infer<typeof quoteSchema>;

// Contact form schema for home page contact form
export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  message: z.string().min(1, "Message is required"),
  images: z.array(z.object({
    filename: z.string(),
    content: z.string(), // base64 encoded content
  })).optional(),
});

export type ContactRequest = z.infer<typeof contactSchema>;
