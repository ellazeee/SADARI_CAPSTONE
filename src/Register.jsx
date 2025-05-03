import React from 'react';

export default function Register() {
  return (
    <div className="min-h-screen bg-pink-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Daftar Akun</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Nama Lengkap</label>
            <input type="text" className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input type="password" className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
}
