"use client"
import { useForm } from 'react-hook-form';
import { useSWRConfig } from 'swr';

interface Props {
  postId: string;
  // onCommentAdded: () => void;
}

interface Props {
  postId: string;
}

export default function AddComment({ postId }: Props) {
  const { mutate } = useSWRConfig();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const res = await fetch('/api/comments', {
        method: "POST",
        body: JSON.stringify({ ...data, postId }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        reset();
        mutate(`/api/comments?postId=${postId}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  }

  return (
    <div className='mt-4'>
      <p>Leave a Comment <span role='img'>💬</span></p>
      <form className='flex flex-col border dark:border-purple-700 shadow-sm rounded px-8 py-6 mb-10' onSubmit={handleSubmit((data) => onSubmit(data))}>
        <label>Name</label>
        <input {...register('name', { required: true })} className='mb-4 py-1 border shadow-md rounded-md dark:border-dark dark:shadow-md' />
        {errors.name && <p className='text-sm text-red-600'>Name is required.</p>}
        <label>Email <span className='text-xs'>(Your email will not be published!)</span></label>
        <input {...register('email', { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, })} className='mb-4 py-1 border shadow-md rounded-md dark:border-dark dark:shadow-md' />
        {errors.email && <p className='text-sm text-red-600'>Please enter valid email address.</p>}
        <label>Comment</label>
        <textarea {...register('comment', { required: true, minLength: 2 })} className='mb-4 py-1 border shadow-md rounded-md dark:border-dark dark:shadow-md' />
        {errors.comment && <p className='text-sm text-red-600'>Comment is required Minimum 2 characters.</p>}
        <input className={`cursor-pointer bg-purple-500 text-white rounded py-2 px-4 transition-all duration-200 hover:bg-purple-600 active:opacity-85${isSubmitting ? ' opacity-65' : ''}`}
          value={isSubmitting ? 'Adding comment...' : 'Add Comment'}
          disabled={isSubmitting}
          type="submit" />
      </form>
    </div>
  )
}