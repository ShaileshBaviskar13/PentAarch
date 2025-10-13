import React from "react";

export default function ProfileSection() {
  return (
    <section className="max-w-2xl mx-auto my-16 p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">My Profile</h2>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <img
            src="https://ui-avatars.com/api/?name=User+Name&background=2563eb&color=fff&size=128"
            alt="Profile Avatar"
            className="w-32 h-32 rounded-full border-4 border-blue-600 shadow-md"
          />
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">User Name</h3>
            <p className="text-gray-600 mb-2">user@email.com</p>
            <p className="text-gray-500">Short bio or description about the user goes here. You can update your profile information anytime.</p>
          </div>
        </div>
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="bio">Bio</label>
            <textarea id="bio" name="bio" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" rows={3} placeholder="Tell us about yourself" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition-colors">Update Profile</button>
        </form>
      </div>
    </section>
  );
}
