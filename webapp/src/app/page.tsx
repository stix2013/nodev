'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Site</h1>
      <p className="text-lg">This is a modern layout example.</p>
      <div className="mt-8">
        <Link href="/login" className="text-blue-500 hover:underline mr-4">Login</Link>
        <Link href="/dashboard" className="text-blue-500 hover:underline">Dashboard</Link>
      </div>
    </div>
  );
}

