// src/pages/home.js
import { createNavbar } from "../components/navbar.js";

export function renderHome() {
  return `
    ${createNavbar()}

    <div class="pt-20 min-h-screen bg-white">
      <h1 class="text-center mt-10 font-bold text-5xl font-Source text-gray-800">
        How does FoodInventoryPro work?
      </h1>

      <!-- Section 1: Essential features -->
      <section class="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center gap-12">
        <div class="md:w-1/2 order-2 md:order-1 flex flex-col justify-center">
          <h2 class="font-bold text-4xl font-Source text-gray-800">
            Essential features for new users
          </h2>
          <p class="mt-4 text-lg text-gray-600 font-Source max-w-xl">
            New users can start using FoodInventoryPro without technical knowledge. Go to our website, add items to your inventory, and easily manage your food storage.
          </p>
          <h3 class="mt-10 text-2xl font-Source text-gray-700">
            Don’t Forget, Simple is better
          </h3>
        </div>
        <div class="md:w-1/2 order-1 md:order-2 flex justify-center">
          <img 
            src="/images/Home 1.png" 
            alt="Essential features" 
            class="w-full max-w-lg object-contain"
          />
        </div>
      </section>

      <!-- Section 2: Data management -->
      <section class="max-w-7xl mx-auto px-4 py-16 bg-[#EEEEEE] flex flex-col md:flex-row-reverse items-center gap-12">
        <div class="md:w-1/2">
          <h2 class="font-bold text-4xl font-Source text-gray-800">
            FoodInventoryPro and data management
          </h2>
          <p class="mt-4 text-lg text-gray-600 font-Source max-w-xl">
            FoodInventoryPro ensures efficient food storage management. Its system is user-friendly, accessible, and reliable for all users. It revolutionizes the way food inventory is managed.
          </p>
          <button class="mt-8 px-8 py-3 bg-red-600 text-white rounded-3xl hover:bg-red-700 transition font-medium shadow-lg">
            Start Managing Food
          </button>
        </div>
        <div class="md:w-1/2 flex justify-center">
          <img 
            src="/images/Home 2.png" 
            alt="Data management" 
            class="w-full max-w-lg object-contain "
          />
        </div>
      </section>

      <!-- Section 3: Optimize process -->
      <section class="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12">
        <div class="md:w-1/2 order-2 md:order-1">
          <h2 class="font-bold text-4xl font-Source text-gray-800">
            Optimize your food inventory process
          </h2>
          <p class="mt-4 text-lg text-gray-600 font-Source max-w-xl">
            FoodInventoryPro transforms food inventory processes, providing insights for better decision-making and value creation for users.
          </p>
        </div>
        <div class="md:w-1/2 order-1 md:order-2 flex justify-center">
          <img 
            src="/images/Home 3.png" 
            alt="Optimize inventory process" 
            class="w-full max-w-lg object-contain"
          />
        </div>
      </section>

      <!-- Section 4: Efficient transactions + Food Inventory highlight -->
      <section class="max-w-7xl mx-auto px-4 py-16 bg-[#EEEEEE] flex flex-col md:flex-row-reverse items-center gap-12">
        <div class="md:w-1/2">
          <h2 class="font-bold text-4xl font-Source text-gray-800">
            Efficient and smart transactions
          </h2>
          <p class="mt-4 text-lg text-gray-600 font-Source max-w-xl">
            Explore how FoodInventoryPro's technology streamlines data into actionable insights, enhancing efficiency in food inventory management.
          </p>
        </div>
        <div class="md:w-1/2 flex flex-col items-center">
          <img 
            src="/images/Home 4.png" 
            alt="Smart transactions" 
            class="w-full max-w-lg object-contain"
          />
          <div class="mt-10 text-center max-w-md">
            <h3 class="text-3xl font-bold font-Source text-gray-800">
              Food Inventory
            </h3>
            <p class="mt-2 text-lg text-gray-600 font-Source">
              Your go-to platform for managing food inventory with ease.
            </p>
          </div>
        </div>
      </section>
    </div>
  `;
}
