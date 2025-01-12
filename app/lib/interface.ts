export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: { asset: { _ref: string } }; // Replace any with a more specific type
}

export interface fullBlog {
  currentSlug: string;
  title: string;
  content: string | { [key: string]: any }; // Replace any with a more specific type or a complex object
  titleImage: { asset: { _ref: string } }; // Replace any with a more specific type
}