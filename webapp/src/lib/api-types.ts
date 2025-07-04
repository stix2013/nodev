import { z } from 'zod';

// Define a Zod schema for a sample API response
export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
});

export type User = z.infer<typeof UserSchema>;

// Example of how to use the schema to validate data
export function validateUser(data: unknown): User {
  return UserSchema.parse(data);
}

// You can define more complex schemas for different API endpoints
export const PostSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  author: UserSchema, // Nested schema
});

export type Post = z.infer<typeof PostSchema>;
