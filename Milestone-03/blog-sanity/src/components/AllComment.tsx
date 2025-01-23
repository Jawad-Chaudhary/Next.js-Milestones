"use client"
import useSWR from 'swr';

export interface Comment {
  name: string;
  comment: string;
  _createdAt: string;
  _id: string;
}

interface Props {
  postId: string;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function AllComment({ postId }: Props) {
  const { data, error } = useSWR(`/api/comments?postId=${postId}`, fetcher, { refreshInterval: 10000 });

  if (error) return <div>Failed to load comments</div>;
  if (!data) return <div>Loading...</div>;
  // console.log('Comments data:', data); // Add this
  // console.log('Post ID:', postId)

  return (
    <div>
      <h3>All Comments</h3>
      {data.length === 0 && <p>No comments yet!</p>}
      {data.map((comment: Comment) => (
        <div key={comment._id} className='border-b border-gray-200/50 dark:border-purple-700 shadow-sm rounded px-8 py-4 mb-4'>
          <div>
            <strong>{comment.name}</strong>
            <span className="text-gray-700 text-sm ml-3 tracking-wider">{new Date(comment._createdAt).toLocaleString()}</span>
            <p>{comment.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}