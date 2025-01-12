export interface SimpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: string | Blob; // Use 'Blob' or 'File' for images
}

export interface FullBlog {
  currentSlug: string;
  title: string;
  content: string; // Assuming content is a string, you can adjust this if it is another type
  titleImage: string | Blob; // Use 'Blob' or 'File' for images
}
