"use client"
// pages/dashboard/logout.jsx
import { useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Logout = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  useEffect(() => {
    const performLogout = async () => {
      await signOut({ redirectTo: '/' }); // Redirect to homepage or login page after logout
    };

    performLogout();
  }, [signOut, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Logging out...</p>
    </div>
  );
};

export default Logout;
