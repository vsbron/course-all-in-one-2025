import { z } from "zod";
import axios from "axios";

const url = "https://www.course-api.com/react-tours-project";

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

// Setting up the fetch data with axios
export const fetchTours = async (): Promise<Tour[]> => {
  const response = await axios.get<Tour[]>(url);

  // Checking the data type with the one we have from Zod
  const result = tourSchema.array().safeParse(response.data);
  if (!result.success) {
    console.log(result.error.message);
    throw new Error(`Failed to parse tours...`);
  }

  // Return the data
  return result.data;
};
