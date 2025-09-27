import { z } from "zod";

// Pure Zod schemas/types (no database)
export const insertUserSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export const insertDemoRequestSchema = z.object({
  email: z.string().email(),
  solution: z.string().min(1),
  message: z.string().optional(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertDemoRequest = z.infer<typeof insertDemoRequestSchema>;

export type User = {
  id: string;
  username: string;
  password: string;
};

export type DemoRequest = {
  id: string;
  email: string;
  solution: string;
  message?: string;
  createdAt: Date;
};
