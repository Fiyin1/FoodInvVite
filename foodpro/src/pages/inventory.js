// src/pages/inventory.js
import { createSidebar } from "../components/sidebar.js";
import { createInventoryItem } from "../components/inventoryitem.js";

export function renderInventory() {
  // Sample inventory data - replace with real data later
  const items = [
    {
      itemName: "Golden Morn",
      expiryDate: "12-24-2025",
      category: "Cereal",
      itemCount: 130,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: "/images/About2.png",
    },
    {
      itemName: "Golden Morn",
      expiryDate: "12-24-2025",
      category: "Cereal",
      itemCount: 130,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: "/images/About2.png",
    },
    {
      itemName: "Golden Morn",
      expiryDate: "12-24-2025",
      category: "Cereal",
      itemCount: 130,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: "/images/About2.png",
    },
  ];

  const itemsHTML = items.map((item) => createInventoryItem(item)).join("");

  return `
    <div class="flex min-h-screen">
      ${createSidebar("inventory")}

      <main class="flex-1 ml-64 p-8 bg-gray-50">
        <!-- Search Bar -->
        <div class="flex justify-center mb-10">
          <div class="relative font-Source flex items-center border border-black rounded-3xl w-full max-w-2xl bg-[#eeeeee] px-6 py-5 shadow-md">
            <input
              type="text"
              placeholder="Search items..."
              class="w-full bg-transparent outline-none pr-12 text-lg"
            />
            <svg class="absolute right-6 w-7 h-7 text-gray-600 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <!-- Header: Title + Date Button -->
        <div class="flex justify-between items-center mb-6">
          <h1 class="font-Source text-3xl font-bold text-gray-800">Items</h1>
          <button class="bg-red-600 hover:bg-red-700 text-white font-Source text-lg rounded-full px-8 py-3 shadow-lg transition">
            Sort by Date
          </button>
        </div>
        <hr class="mb-8 border-gray-300" />

        <!-- Inventory Items List -->
        <div class="space-y-4">
          ${itemsHTML}
        </div>
      </main>
    </div>
  `;
}
