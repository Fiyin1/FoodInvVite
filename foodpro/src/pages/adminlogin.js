// src/pages/adminlogin.js

export function renderAdminLogin() {
  return `
    <div class="min-h-screen flex items-center justify-center  px-4">
      <form class="max-w-md w-full p-10">
        <h1 class="font-Source text-4xl font-bold text-center mb-10 text-gray-800">
          Admin Log In
        </h1>

        <div class="mb-6">
          <label for="admin-email" class="block mb-2 text-gray-700 font-medium">
            Enter your email
          </label>
          <input
            type="email"
            id="admin-email"
            placeholder="admin@example.com"
            class="rounded-4xl border border-black/50 px-5 py-4 w-full focus:outline-none focus:border-blue-500 transition"
            required
          />
        </div>

        <div class="mb-10">
          <label for="admin-password" class="block mb-2 text-gray-700 font-medium">
            Enter your Password
          </label>
          <input
            type="password"
            id="admin-password"
            placeholder="••••••••"
            class="rounded-4xl border border-black/50 px-5 py-4 w-full focus:outline-none focus:border-blue-500 transition"
            required
          />
        </div>

        <div class="text-center">
          <button
            type="button"
            onclick="navigateTo('dashboard')"
            class="bg-red-600 hover:bg-red-700 text-white font-Source font-semibold rounded-xl px-8 py-4 w-full transition shadow-lg"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  `;
}