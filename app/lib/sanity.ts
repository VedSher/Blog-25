import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  apiVersion: "2022-03-07",
  dataset: "production",
  projectId: "jrdr77q9",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

// Define a specific type for the source parameter
export function urlFor(source: string | { asset: { _ref: string } }): string {
  return builder.image(source).url(); // Ensure you call .url() to get the URL as a string
}
