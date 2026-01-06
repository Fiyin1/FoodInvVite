// src/pages/dashboard.js
import { createSidebar } from "../components/sidebar.js";

export function renderDashboard() {
  return `
    <div class="flex min-h-screen">
      ${createSidebar("dashboard")}

      <main class="flex-1 ml-64 p-8 bg-gray-50">
        <h1 class="font-Source text-4xl font-bold text-gray-800 mb-10">Dashboard</h1>

        <!-- Row 1: Total Users + Total Items -->
        <div class="flex flex-wrap gap-8 mb-10">
          <div class="bg-gray-200 rounded-2xl w-[70%] max-w-md p-8 shadow-lg">
            <span class="font-Source text-2xl block mb-2">Total Users</span>
            <p class="font-Source text-4xl font-bold text-gray-800">2,000,000,000</p>
          </div>
          <div class="bg-gray-200 rounded-2xl w-[70%] max-w-md p-8 shadow-lg">
            <span class="font-Source text-2xl block mb-2">Total Items in Inventory</span>
            <p class="font-Source text-4xl font-bold text-gray-800">2,000,000,000</p>
          </div>
        </div>

        <!-- Row 2: Categories -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gray-200 rounded-2xl p-8 shadow-lg">
            <span class="font-Source text-2xl block mb-2">Total Cereal</span>
            <p class="font-Source text-3xl font-bold">2,000,000,000</p>
          </div>
          <div class="bg-gray-200 rounded-2xl p-8 shadow-lg">
            <span class="font-Source text-2xl block mb-2">Total Drinks</span>
            <p class="font-Source text-3xl font-bold">2,000,000,000</p>
          </div>
          <div class="bg-gray-200 rounded-2xl p-8 shadow-lg">
            <span class="font-Source text-2xl block mb-2">Total Choco Bars</span>
            <p class="font-Source text-3xl font-bold">2,000,000,000</p>
          </div>
          <div class="bg-gray-200 rounded-2xl p-8 shadow-lg">
            <span class="font-Source text-2xl block mb-2">Total Biscuits</span>
            <p class="font-Source text-3xl font-bold">2,000,000,000</p>
          </div>
          <div class="bg-gray-200 rounded-2xl p-8 shadow-lg">
            <span class="font-Source text-2xl block mb-2">Total Spreads</span>
            <p class="font-Source text-3xl font-bold">2,000,000,000</p>
          </div>
          <div class="bg-gray-200 rounded-2xl p-8 shadow-lg">
            <span class="font-Source text-2xl block mb-2">Total Nuts</span>
            <p class="font-Source text-3xl font-bold">2,000,000,000</p>
          </div>
        </div>
      </main>
    </div>
  `;
}
