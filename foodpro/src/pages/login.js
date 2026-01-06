// src/pages/login.js
export function renderLogin() {
  return `
    <div class="flex h-screen">
      <div class="basis-full hidden md:block">
        <img src="/images/LoginPic.png" alt="Login" class="w-full h-full object-cover" />
      </div>

      <div class="basis-full flex items-center justify-center bg-gray-50 px-4">
        <form class="max-w-md w-full">
          <h1 class="font-Source text-3xl font-bold text-center mb-10">Log In</h1>
          
          <div class="mb-4">
            <label for="email" class="block mb-2 text-gray-700">Enter your email</label>
            <input type="email" id="email" placeholder="Adeyemitimilehin@gmail.com"
              class="w-full px-4 py-3 border border-black/50 rounded-4xl focus:outline-none focus:border-blue-500" required />
          </div>
          
          <div class="mb-8">
            <label for="password" class="block mb-2 text-gray-700">Enter your Password</label>
            <input type="password" id="password" placeholder="••••••••"
              class="w-full px-4 py-3 border border-black/50 rounded-4xl focus:outline-none focus:border-blue-500" required />
          </div>
          
          <div class="text-center">
            <button type="button" id="login-btn" class="bg-red-600 hover:bg-red-700 text-white font-Source rounded-2xl px-10 py-3 transition">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}
