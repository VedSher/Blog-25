import { FullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 30; // revalidate at most 30 seconds

// Fetch data from Sanity
async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == $slug] {
        "currentSlug": slug.current,
        title,
        content,
        titleImage
    }[0]`;

  const data = await client.fetch(query, { slug });
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  // Ensure data is fetched and properly typed
  const data = (await getData(params.slug)) as FullBlog;

  // Handle case where no data is found
  if (!data) {
    return (
      <div className="mt-8 text-center">
        <h1 className="text-2xl font-bold">Blog not found</h1>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h1>
        <span className="block text-2xl text-center text-primary font-semibold tracking-wide uppercase">
          Vaidik - Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        width={800}
        height={800}
        alt="Title Image"
        priority
        className="rounded-lg mt-8 border"
      />

      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
