import { useEffect, useState } from "react";
import { createClient } from "contentful";

// Create Contentful client
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  environment: "master",
  accessToken: import.meta.env.VITE_CONTENTFUL_DELIVERY_ACCESS,
});

export const useFetchProjects = () => {
  // Create state value for isLoading and projects
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  // Async function that does the data fetch
  const getData = async () => {
    try {
      // Get the data
      const response = await client.getEntries({ content_type: "projects" });
      const fetchedProjects = response.items.map((item) => {
        // Get the item data
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;

        // Return the data as the object
        return { title, url, id, img };
      });

      // Update the state
      setProjects(fetchedProjects);
    } catch (error) {
      console.log(error.message);
    } finally {
      // Disable loading state
      setIsLoading(false);
    }
  };

  // useEffect function that
  useEffect(() => {
    // Call the fetching function
    getData();
  }, []);

  // Return the projects and loading state
  return { projects, isLoading };
};
