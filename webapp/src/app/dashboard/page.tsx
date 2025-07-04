"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import axios from 'axios';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const verifySession = async () => {
      try {
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
          withCredentials: true,
        });
      } catch {
        router.push('/login');
      }
    };

    verifySession();
  }, [router]);

  const handleLogout = async () => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome to the Dashboard!</h1>
        <p className="text-gray-600">This is a secure page. You are logged in.</p>
        <p className="text-gray-600 mt-4">More content will go here.</p>
        <div className="mt-6">
          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
