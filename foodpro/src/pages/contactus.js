// src/pages/contactus.js
import { createNavbar } from "../components/navbar.js";

export function renderContactUs() {
  return `
    ${createNavbar()}

    <div class="pt-10 min-h-screen">
      <!-- Main Content -->
      <div class="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 gap-12 mb-20">
        
        <!-- Left: Image -->
        <div class="w-full lg:w-1/2 flex items-center justify-center mt-10 lg:mt-20">
          <img
            src="/images/ContactUs.png"
            alt="Contact Us"
            class="w-full max-w-lg h-auto object-contain"
          />
        </div>

        <!-- Right: Form -->
        <div class="w-full lg:w-1/2 mt-10 lg:mt-20 px-4 lg:px-0">
          <h1 class="text-4xl md:text-5xl font-bold font-Source text-gray-800">
            Contact Us
          </h1>
          <p class="font-Source text-lg text-gray-600 mt-8 max-w-md">
            Get in touch for inventory management solutions
          </p>

                    <form class="mt-10">
            <!-- All fields wrapped in a fixed-width container -->
            <div class="max-w-md space-y-6">
              <!-- Name -->
              <div class="flex flex-col gap-2">
                <label for="contact-name" class="font-medium font-Source text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  placeholder="Your name"
                  class="rounded-4xl px-6 py-4 w-full bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
                  required
                />
              </div>

              <!-- Email -->
              <div class="flex flex-col gap-2">
                <label for="contact-email" class="font-medium font-Source text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  placeholder="your@email.com"
                  class="rounded-4xl px-6 py-4 w-full bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
                  required
                />
              </div>

              <!-- Message -->
              <div class="flex flex-col gap-2">
                <label for="contact-message" class="font-medium font-Source text-gray-700">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows="6"
                  placeholder="Write your message here..."
                  class="rounded-3xl px-6 py-5 w-full bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-300 resize-none transition"
                  required
                ></textarea>
              </div>

              <!-- Send Button - now perfectly aligned -->
              <div class="flex justify-end mt-8">
                <button
                  type="submit"
                  class="bg-red-600 hover:bg-red-700 mb-10 text-white font-Source font-semibold rounded-2xl px-12 py-3 shadow-lg transition transform hover:scale-105"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}
