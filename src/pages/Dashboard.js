import React from 'react';
import { useSelector } from 'react-redux';

export default function DashboardPage() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md w-full px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {user && (
            <>
              <h1 className="text-xl font-semibold mb-4">Welcome, {user.email}!</h1>
              <p className="text-gray-500">You are now logged in.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
