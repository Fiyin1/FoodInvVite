// src/components/navbar.js
let isMobileMenuOpen = false;

export function createNavbar() {
  return `
    <nav class="bg-white shadow-sm overflow-hidden fixed top-0 left-0 right-0 z-50">
      <div class="flex h-16 items-center px-4 md:px-0 max-w-7xl mx-auto">
        <!-- Logo -->
        <div class="ml-0 md:ml-20 mt-1">
          <img
            src="/images/Navbar .png"
            alt="FoodInventoryPro Logo"
            class="w-14 h-14 object-cover rounded-full"
          />
        </div>

        <!-- Desktop Links -->
        <div class="hidden md:flex items-center gap-8 ml-6 flex-1">
          <a href="/home" onclick="navigateTo('home')" class="text-black hover:text-red-600 transition">Welcome To</a>
          <a href="/additem" onclick="navigateTo('additem')" class="text-black hover:text-red-600 transition">Add Items</a>
          <a href="/aboutus" onclick="navigateTo('aboutus')" class="text-black hover:text-red-600 transition">About</a>
          <a href="/contactus" onclick="navigateTo('contactus')" class="text-black hover:text-red-600 transition">Contact</a>
        </div>

        <!-- Desktop Login Button -->
        <div class="hidden md:block mr-6">
          <a href="#" onclick="navigateTo('login')" class="text-white rounded-3xl px-6 py-2 bg-red-600 hover:bg-red-700 transition">
            Login
          </a>
        </div>

        <!-- Mobile Hamburger -->
        <div class="md:hidden ml-auto">
          <button id="mobile-menu-btn" class="focus:outline-none p-2">
            ${
              isMobileMenuOpen
                ? `<svg class="h-8 w-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`
                : `<svg class="h-8 w-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>`
            }
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      ${
        isMobileMenuOpen
          ? `
        <div class="md:hidden bg-white shadow-md px-4 py-6 space-y-4 border-t">
          <a href="#" onclick="navigateTo('home')" class="block text-black font-Source hover:text-red-600">Welcome To</a>
          <a href="#" onclick="navigateTo('additem')" class="block text-black font-Source hover:text-red-600">Add Items</a>
          <a href="#" onclick="navigateTo('aboutus')" class="block text-black font-Source hover:text-red-600">About</a>
          <a href="#" onclick="navigateTo('contactus')" class="block text-black font-Source hover:text-red-600">Contact</a>
          <a href="#" onclick="navigateTo('login')" class="block text-center text-white rounded-3xl px-6 py-3 bg-red-600 hover:bg-red-700 mt-4">
            Login
          </a>
        </div>
      `
          : ""
      }
    </nav>
  `;
}

export function toggleMobileMenu() {
  isMobileMenuOpen = !isMobileMenuOpen;
}
export function closeMobileMenu() {
  isMobileMenuOpen = false;
}