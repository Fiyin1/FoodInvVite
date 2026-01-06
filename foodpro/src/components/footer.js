// src/components/footer.js

export function createFooter() {
  return `
    <footer class="bg-red-600 py-20 mt-20 shadow-sm overflow-hidden">
      <div class="flex flex-col gap-10 items-center justify-center text-center px-4">
        <h3 class="font-Source text-white text-5xl font-bold max-w-4xl">
          Get started for free
        </h3>
        <span class="font-Source text-white text-2xl max-w-3xl">
          No payment needed. Start optimizing your food inventory today.
        </span>
      </div>

      <div class="flex flex-col sm:flex-row gap-8 items-center justify-center mt-10">
        <button class="bg-black font-Source text-white rounded-full px-10 py-3 hover:bg-gray-800 transition shadow-lg">
          Start Now
        </button>
        <a href="#" onclick="navigateTo('contactus')" class="bg-black font-Source text-white rounded-full px-10 py-3 hover:bg-gray-800 transition shadow-lg">
          Contact Us
        </a>
      </div>
    </footer>
  `;
}
