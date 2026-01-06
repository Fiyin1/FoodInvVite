// src/pages/userlist.js
import { createSidebar } from "../components/sidebar.js";
import { createUserCard } from "../components/usercard.js";

export function renderUserList() {
  // Sample data - replace later with real data from API/localStorage
  const users = [
    { name: "Adeyemi Timilehin David", email: "Adeyemitimilehin@gmail.com" },
    { name: "Adeyemi Timilehin David", email: "Adeyemitimilehin@gmail.com" },
    { name: "Adeyemi Timilehin David", email: "Adeyemitimilehin@gmail.com" },
    { name: "Adeyemi Timilehin David", email: "Adeyemitimilehin@gmail.com" },
    { name: "Adeyemi Timilehin David", email: "Adeyemitimilehin@gmail.com" },
  ];

  const userCardsHTML = users
    .map((user) => createUserCard(user.name, user.email))
    .join("");

  return `
    <div class="flex min-h-screen">
      ${createSidebar("userslist")}

      <main class="flex-1 ml-64 p-8 bg-gray-50">
        <!-- Search Bar -->
        <div class="flex justify-center mb-8">
          <div class="relative font-Source flex items-center border border-black rounded-3xl w-full max-w-lg bg-[#eeeeee] px-6 py-4 shadow-md">
            <input
              type="text"
              placeholder="Search users..."
              class="w-full bg-transparent outline-none pr-10 text-lg"
            />
            <svg class="absolute right-6 w-6 h-6 text-gray-600 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <!-- Title -->
        <h1 class="font-Source text-3xl font-bold text-gray-800 mb-4">Users</h1>
        <hr class="mb-8 border-gray-300" />

        <!-- User Cards List -->
        <div class="space-y-2">
          ${userCardsHTML}
        </div>
      </main>
    </div>
  `;
}
