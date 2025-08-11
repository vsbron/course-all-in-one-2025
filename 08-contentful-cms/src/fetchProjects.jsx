import { createClient } from "contentful";

// Create Contentful client
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  environment: "master",
  accessToken: import.meta.env.VITE_CONTENTFUL_DELIVERY_ACCESS,
});

client
  .getEntries({ content_type: "projects" })
  .then((response) => console.log(response));
