import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get('postId');

  if (!postId) {
    return NextResponse.json(
      { message: 'Post ID is required' },
      { status: 400 }
    );
  }

  try {
    const comments = await client.fetch(
      `*[_type == "comment" && post._ref == $postId] | order(_createdAt desc) {
        _id,
        name,
        comment,
        _createdAt,
        post->{_id}
      }`,
      { postId }
    );

    return NextResponse.json(comments);
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Failed to fetch comments', error: error.message },
      { status: 500 }
    );
  }
}

// Add this to your existing api/comments/route.ts
export async function POST(request: Request) {
  const { name, email, comment, postId } = await request.json();

  if (!name || !email || !comment || !postId) {
    return NextResponse.json(
      { message: 'All fields are required' },
      { status: 400 }
    );
  }

  try {
    const createdComment = await client.create({
      _type: 'comment',
      name,
      email,
      comment,
      post: {
        _type: 'reference',
        _ref: postId,
      },
    });

    return NextResponse.json(createdComment, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Failed to create comment', error: error.message },
      { status: 500 }
    );
  }
}