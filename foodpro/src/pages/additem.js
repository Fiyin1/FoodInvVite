// src/pages/additem.js
import { createNavbar } from "../components/navbar.js";

export function renderAddItem() {
  return `
    ${createNavbar()}

    <div class="pt-20 min-h-screen bg-gray-50 px-4">
      <!-- Back Button -->
      <button 
        onclick="history.back()" 
        class="flex items-center gap-2 ml-8 md:ml-16 mt-6 text-gray-700 font-bold font-Source hover:text-gray-900 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back
      </button>

      <!-- Main Content -->
      <div class="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto mt-10 mb-20">
        <!-- Left: Image Upload -->
        <div class="w-full lg:w-1/2">
          <p class="font-bold text-xl md:text-2xl px-8 md:px-14 font-Source text-gray-800">
            Add images
          </p>

          <div class="mt-6 rounded-2xl bg-gray-100 w-full max-w-lg h-80 mx-auto flex items-center justify-center shadow-inner">
            <label class="flex flex-col items-center gap-3 cursor-pointer text-gray-600 hover:text-gray-800 transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-base font-medium font-Source">
                Upload image
              </span>
              <input type="file" accept="image/*" class="hidden" />
            </label>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="w-full lg:w-1/2 mx-auto max-w-lg">
          <h2 class="text-2xl font-bold font-Source text-gray-800 mb-6">
            Upload new item
          </h2>

          <form class="space-y-5">
            <!-- Name -->
            <div class="flex flex-col gap-2">
              <label for="name" class="font-medium font-Source text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Golden morn"
                class="rounded-4xl border border-black/50 px-4 py-3 w-full focus:outline-none focus:border-blue-500 transition"
                required
              />
            </div>

            <!-- Expiry Date -->
            <div class="flex flex-col gap-2">
              <label for="expiryDate" class="font-medium font-Source text-gray-700">Expiry Date</label>
              <input
                type="date"
                id="expiryDate"
                class="rounded-4xl border border-black/50 px-4 py-3 w-full focus:outline-none focus:border-blue-500 transition"
                required
              />
            </div>

            <!-- Description -->
            <div class="flex flex-col gap-2">
              <label for="description" class="font-medium font-Source text-gray-700">Description</label>
              <textarea
                id="description"
                rows="4"
                placeholder="Add a description..."
                class="rounded-2xl border border-black/50 px-4 py-3 w-full focus:outline-none focus:border-blue-500 resize-none transition"
              ></textarea>
            </div>

            <!-- Category -->
            <div class="flex flex-col gap-2">
              <label for="category" class="font-medium font-Source text-gray-700">Category</label>
              <select
                id="category"
                class="rounded-4xl border border-black/50 px-4 py-3 w-full focus:outline-none focus:border-blue-500 transition bg-white"
              >
                <option value="" disabled selected>Category</option>
                <option value="grains">Grains & Cereals</option>
                <option value="dairy">Dairy</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="canned">Canned Goods</option>
                <option value="spices">Spices & Seasonings</option>
                <option value="other">Other</option>
              </select>
            </div>

            <!-- Submit Button -->
            <div class="mt-8">
              <button
                type="submit"
                class="w-full bg-black hover:bg-gray-800 text-white font-Source font-medium rounded-2xl px-10 py-3 mb-2 transition shadow-lg"
              >
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}
