'use client';

import { useActionState } from 'react';
import { subscribe } from '@/actions/subscribe';
import { useTransition } from 'react';

export default function SubscribeForm() {
  const [state, formAction] = useActionState(subscribe, { message: '' });
  const [isPending, startTransition] = useTransition();

  return (
    <form 
      action={(formData) => {
        startTransition(() => formAction(formData));
      }} 
      className="flex justify-center"
    >
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <div className="w-full sm:w-3/4 flex relative border border-gray-600 rounded-2xl mr-2">
        <input
          type="email"
          id="email"
          className="py-3 px-4 block w-full rounded-2xl focus:ring-0 focus:ring-offset-0"
          name="email"
        />
        <p aria-live="polite">{state?.message}</p>
      </div>
      <button
        type="submit"
        className={`py-3 px-4 inline-flex justify-center items-center rounded-2xl ${
          state?.success ? 'bg-blue-500' : 'bg-orange-400'
        }`}
      >
        <span className="font-semibold text-md text-white pt-1">
          {isPending ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : state?.success ? (
            'Subscribed!'
          ) : (
            'Subscribe'
          )}
        </span>
      </button>
    </form>
  );
}
