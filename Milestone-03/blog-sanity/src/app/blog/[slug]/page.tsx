import AddComment from "@/components/AddComment";
import AllComment from "@/components/AllComment";
import { components } from "@/components/CustomComponent";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";

export default async function page({ params: { slug } }: { params: { slug: string } }) {
  const postQuery = `
    *[_type == 'post' && slug.current == $slug][0]{
      _id, title, summary, image, content,
      author->{bio, image, name},
      tags[]-> { _id }
    }
  `;
  const post = await client.fetch(postQuery, { slug });
  console.log(post);

  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
        {post.title}
      </h1>

      {/* Featured Image */}
      <Image
        src={urlFor(post.image).url()}
        width={500}
        height={500}
        alt={post.title}
        className="rounded"
      />

      {/* Blog Summary Section */}
      <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
          Summary
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
          {post.summary}
        </p>
      </section>

      {/* Author Section (Image & Bio) */}
      <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        <Image
          src={urlFor(post.author.image).url()}
          width={200}
          height={200}
          alt="author"
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-dark dark:text-light">{post.author.name}</h3>
          <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
            {post.author.bio}
          </p>
        </div>
      </section>

      {/* Main Body of Blog */}
      <div className="text-lg leading-normal text-dark/80 dark:text-light/80">
        <PortableText value={post.content} components={components} />
      </div>

      {/* Comment Section */}
      <AddComment postId={post._id} />
      <AllComment postId={post._id} />
    </article>
  );
}