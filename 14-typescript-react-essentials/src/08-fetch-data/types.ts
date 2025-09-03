import { z } from "zod";

// Create the schema for tour
export const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  info: z.string(),
  price: z.string(),
  // something: z.string(),
});

// Create the type from the schema
export type Tour = z.infer<typeof tourSchema>;
