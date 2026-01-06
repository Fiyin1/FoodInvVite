// src/components/sidebar.js

export function createSidebar(currentPage = "dashboard") {
  const isActive = (page) =>
    currentPage === page
      ? "bg-gray-700 text-white"
      : "text-gray-900 hover:bg-gray-500";

  return `
    <div class="h-screen w-64 flex flex-col bg-gray-200 fixed left-0 top-0 overflow-y-auto">
      <div class="mt-20 mx-4 space-y-4">
        <!-- Dashboard -->
        <a 
          href="/dashboard" 
          onclick="navigateTo('dashboard')" 
          class="flex items-center gap-3 px-4 py-3 rounded-md transition ${isActive(
            "dashboard"
          )}"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span class="font-Source text-lg">Dashboard</span>
        </a>

        <!-- View Users -->
        <a 
          href="/userlist" 
          onclick="navigateTo('userlist')" 
          class="flex items-center gap-3 px-4 py-3 rounded-md transition ${isActive(
            "userlist"
          )}"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span class="font-Source text-lg">View Users</span>
        </a>

        <!-- Add User -->
        <a 
          href="/adduser" 
          onclick="navigateTo('adduser')" 
          class="flex items-center gap-3 px-4 py-3 rounded-md transition ${isActive(
            "adduser"
          )}"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-6a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
          <span class="font-Source text-lg">Add User</span>
        </a>

        <!-- NEW: Inventory -->
        <a 
          href="/inventory" 
          onclick="navigateTo('inventory')" 
          class="flex items-center gap-3 px-4 py-3 rounded-md transition ${isActive(
            "inventory"
          )}"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <span class="font-Source text-lg">Inventory</span>
        </a>

        <!-- Logout (no active state) -->
        <a 
          href="/adminlogin" 
          onclick="navigateTo('adminlogin')" 
          class="flex items-center gap-3 px-4 py-3 rounded-md text-gray-900 hover:bg-gray-500 transition "
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span class="font-Source text-lg">Logout</span>
        </a>
      </div>
    </div>
  `;
}
