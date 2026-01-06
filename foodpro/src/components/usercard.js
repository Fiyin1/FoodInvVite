// src/components/usercard.js

export function createUserCard(userName, userEmail) {
  // Unique ID for this card's menu (to avoid conflicts)
  const menuId = `menu-${Math.random().toString(36).substr(2, 9)}`;

  return `
    <div class="relative">
      <!-- Main card -->
      <div class="flex items-center justify-between p-4 mt-4">
        <!-- User info -->
        <div class="flex flex-col gap-2 flex-1">
          <span class="font-medium">Name: ${userName}</span>
          <span class="font-medium">Email: ${userEmail}</span>
        </div>

        <!-- Menu button -->
        <div class="flex items-center flex-1 justify-end">
          <div class="relative" id="${menuId}">
            <button
              onclick="toggleUserMenu('${menuId}')"
              class="p-2 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
              aria-label="Open menu"
            >
              <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>

            <!-- Dropdown menu (hidden by default) -->
            <div id="${menuId}-dropdown" class="hidden absolute right-full top-0 mr-2 w-48 bg-white rounded-lg shadow-lg border z-50">
              <button
                onclick="handleUserAction('${menuId}', 'view')"
                class="flex items-center w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                <svg class="w-4 h-4 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>View Inventory</span>
              </button>
              <button
                onclick="handleUserAction('${menuId}', 'delete')"
                class="flex items-center w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors text-red-600"
              >
                <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span>Delete User</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-2" />
    </div>
  `;
}

// Global functions for menu handling
window.toggleUserMenu = function (menuId) {
  const dropdown = document.getElementById(menuId + "-dropdown");
  const isHidden = dropdown.classList.contains("hidden");

  // Close all other open menus first
  document.querySelectorAll('[id$="-dropdown"]').forEach((el) => {
    el.classList.add("hidden");
  });

  // Toggle current one
  if (isHidden) {
    dropdown.classList.remove("hidden");
  }
};

window.handleUserAction = function (menuId, action) {
  // Close the menu
  document.getElementById(menuId + "-dropdown").classList.add("hidden");

  if (action === "view") {
    alert("Viewing inventory...");
    console.log("View inventory clicked!");
    // Later: navigateTo('inventory') or open modal
  } else if (action === "delete") {
    if (confirm("Are you sure you want to delete this user?")) {
      alert("Deleting user...");
      console.log("Delete user confirmed!");
      // Later: remove card from DOM or call API
    }
  }
};

// Close menus when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest('[id^="menu-"]')) {
    document.querySelectorAll('[id$="-dropdown"]').forEach((el) => {
      el.classList.add("hidden");
    });
  }
});
