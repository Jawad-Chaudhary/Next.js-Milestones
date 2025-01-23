import BlogCard from "@/components/BlogCard";
import { IPost } from "@/components/blogtype";
import { client } from "@/sanity/lib/client";

export default async function Home() {

  const query = `*[_type == "post" && !(_id in path("drafts.**"))]| order(_createdAt desc){
  "image": image.asset._ref,
  "id": _id,
  title,
  summary,
  "slug": slug.current
}`;

  let post: IPost[] = [];
    
  try {
    post = await client.fetch(query);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }
  // console.log(post)

  return (
    <main className="flex min-h-screen flex-col ">
      <h1 className="text-2xl font-bold uppercase my-12 text-center text-dark dark:text-light sm:text-3xl lg:text-5xl ">
        Most Recent blogs
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {
          post.map( (post:IPost) =>(
            <BlogCard key={post.id} post={post} />
          ))
        }
      </section>
    </main>
  );
}
