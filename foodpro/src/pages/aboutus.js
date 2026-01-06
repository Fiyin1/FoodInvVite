// src/pages/aboutus.js
import { createNavbar } from "../components/navbar.js";
import { createFooter } from "../components/footer.js";

export function renderAboutUs() {
  return `
    ${createNavbar()}

    <div class=" min-h-screen bg-gray-50">
      <!-- Section 1: Meet the team -->
      <section class="flex flex-col md:flex-row min-h-screen bg-[#EEEEEE]">
        <div class="w-full md:w-1/2 px-8 md:px-16 flex flex-col justify-center">
          <h1 class="font-bold text-4xl font-Source text-gray-800 leading-tight">
            Meet the team behind this magic
          </h1>
          <p class="max-w-xl text-lg font-Source text-gray-600 mt-6">
            We're passionate about revolutionizing food inventory management.
          </p>
        </div>
        <div class="w-full md:w-1/2">
          <img
            src="/images/About1.png"
            alt="Team behind FoodInventoryPro"
            class="w-full h-full object-cover"
          />
        </div>
      </section>

      <!-- Section 2: Our Food Journey -->
      <section class="flex flex-col min-h-screen py-16">
        <div class="text-center px-4">
          <h1 class="text-4xl md:text-5xl font-Source font-bold text-gray-800">
            Our Food Journey
          </h1>
          <p class="text-lg font-Source text-gray-600 mt-6 max-w-4xl mx-auto">
            Founded by a group of food enthusiasts, our company has evolved into a leading provider of innovative solutions for managing food inventory effectively.
          </p>
        </div>

        <div class="mx-auto mt-12 rounded-2xl overflow-hidden shadow-2xl w-[90%] max-w-6xl h-[60vh] md:h-[70vh]">
          <img
            src="/images/About2.png"
            alt="Our Food Journey"
            class="w-full h-full object-cover"
          />
        </div>
      </section>

      <!-- Section 3: Our Team -->
           <!-- Section 3: Our Team (exactly like your React version) -->
      <section class="flex flex-col min-h-screen bg-gray-50">
        <div class="flex flex-col gap-6 items-center justify-center mt-14 px-4">
          <h1 class="text-4xl md:text-5xl font-Source font-bold text-gray-800">
            Our Team
          </h1>
          <img
            src="/images/About3.png"
            alt="Our Team"
            class="w-70 h-54 object-cover rounded-2xl shadow-xl" 
          />
        </div>

        <div class="flex flex-col md:flex-row mt-20 gap-12 max-w-6xl mx-auto px-4">
          <div class="w-full md:w-1/2 flex items-center justify-center">
            <img
              src="/images/About4.png"
              alt="Team member"
              class="w-70 h-54 object-cover rounded-2xl shadow-xl"
            />
          </div>
          <div class="w-full md:w-1/2 flex items-center justify-center">
            <img
              src="/images/About5.png"
              alt="Team member"
              class="w-70 h-54 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <!-- Footer -->
      ${createFooter()}
    </div>
  `;
}
