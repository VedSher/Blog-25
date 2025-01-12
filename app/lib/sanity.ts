import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { ImageUrlBuilder } from "@sanity/image-url/lib/image"; // Import the type for the imageUrlBuilder

export const client = createClient({
  apiVersion: "2022-03-07",
  dataset: "production",
  projectId: "jrdr77q9",
  useCdn: false,
});

const builder: ImageUrlBuilder = imageUrlBuilder(client);

export function urlFor(source: string | { asset: { _ref: string } }): string {
  return builder.image(source);
}