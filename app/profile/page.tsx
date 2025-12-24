'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProfileSection from './ProfileSection';
import { useEffect, useState } from 'react';
import { apiUtils, authAPI } from '../../lib/api';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!apiUtils.isAuthenticated()) {
      // Not logged in -> redirect to login
      router.push('/login');
      return;
    }

    authAPI.getProfile()
      .then(res => {
        if (res && res.data) setUser(res.data.user || res.data);
      })
      .catch(() => {
        // If fetching profile fails (token expired etc.), clear token and redirect
        apiUtils.removeAuthToken();
        router.push('/login');
      })
      .finally(() => setLoading(false));
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        {!loading && user ? (
          <ProfileSection user={user} />
        ) : (
          <div className="max-w-2xl mx-auto py-24 text-center">
            <p className="text-gray-600">Loading profile...</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
