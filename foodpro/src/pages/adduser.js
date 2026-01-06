// src/pages/adduser.js
import { createSidebar } from "../components/sidebar.js";

export function renderAddUser() {
  return `
    <div class="flex min-h-screen">
      ${createSidebar("adduser")}

      <main class="flex-1 ml-64 p-8 bg-gray-50">
        <!-- Main Content -->
        <div class="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto mt-10 mb-20">
          
          <!-- Left: Form -->
          <div class="w-full lg:w-1/2">
            <h1 class="text-3xl md:text-4xl font-bold font-Source text-gray-800 mb-8">
              Add user
            </h1>

            <form class="space-y-8">
              <!-- Name -->
              <div class="flex flex-col gap-3">
                <label for="adduser-name" class="font-medium font-Source text-gray-700 text-lg">
                  Name
                </label>
                <input
                  type="text"
                  id="adduser-name"
                  placeholder="Enter full name"
                  class="rounded-4xl px-6 py-4 w-full max-w-lg bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-300 transition shadow-sm"
                  required
                />
              </div>

              <!-- Email -->
              <div class="flex flex-col gap-3">
                <label for="adduser-email" class="font-medium font-Source text-gray-700 text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="adduser-email"
                  placeholder="user@example.com"
                  class="rounded-4xl px-6 py-4 w-full max-w-lg bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-300 transition shadow-sm"
                  required
                />
              </div>

              <!-- Password -->
              <div class="flex flex-col gap-3">
                <label for="adduser-password" class="font-medium font-Source text-gray-700 text-lg">
                  Password
                </label>
                <input
                  type="password"
                  id="adduser-password"
                  placeholder="••••••••"
                  class="rounded-4xl px-6 py-4 w-full max-w-lg bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-300 transition shadow-sm"
                  required
                />
              </div>

              <!-- Add Button -->
              <div class="flex justify-end mt-10">
                <button
                  type="submit"
                  class="bg-red-600 hover:bg-red-700 text-white font-Source font-semibold rounded-2xl px-12 py-4 shadow-lg transition transform hover:scale-105"
                >
                  Add
                </button>
              </div>
            </form>
          </div>

          <!-- Right: Image -->
          <div class="w-full lg:w-1/2 flex items-center justify-center">
            <img
              src="/images/Adduser.png"
              alt="Add User Illustration"
              class="w-full max-w-md h-auto object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </main>
    </div>
  `;
}
