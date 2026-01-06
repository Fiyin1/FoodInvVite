import "./style.css";
import { renderLogin } from "./pages/login.js";
import { renderHome } from "./pages/home.js";
import { renderAboutUs } from "./pages/aboutus.js";
import { renderAddItem } from "./pages/additem.js";
import { renderContactUs } from "./pages/contactus.js";
import { renderAdminLogin } from "./pages/adminlogin.js";
import { renderDashboard } from "./pages/dashboard.js";
import { renderUserList } from "./pages/userlist.js";
import { renderAddUser } from "./pages/adduser.js";
import { renderInventory } from "./pages/inventory.js";
import { createNavbar, toggleMobileMenu } from "./components/navbar.js";
import { createSidebar } from "./components/sidebar.js"; 

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  if (!app) {
    console.error("Element #app not found in the DOM!");
    return;
  }

  // Global navigation function
  window.navigateTo = function (page) {
    history.pushState({ page }, "", page === "login" ? "/" : `/${page}`);
    loadPage(page);

    // Close mobile menu on navigation (for customer pages)
    const mobileBtn = document.getElementById("mobile-menu-btn");
    if (mobileBtn) {
      toggleMobileMenu();
      loadPage(page); // Re-render to update hamburger icon
    }
  };

  function loadPage(page = "login") {
    if (page === "" || page === "login") {
      app.innerHTML = renderLogin();
      document
        .getElementById("login-btn")
        ?.addEventListener("click", () => navigateTo("home"));
    } else if (page === "home") {
      app.innerHTML = renderHome();
    } else if (page === "aboutus") {
      app.innerHTML = renderAboutUs();
    } else if (page === "additem") {
      app.innerHTML = renderAddItem();
    } else if (page === "contactus") {
      app.innerHTML = renderContactUs();
    } else if (page === "adminlogin") {
      app.innerHTML = renderAdminLogin();
    } else if (page === "userlist") {
      app.innerHTML = renderUserList();
    } else if (page === "adduser") {
      app.innerHTML = renderAddUser();
    } else if (page === "inventory") {
      app.innerHTML = renderInventory();
    } else if (["dashboard"].includes(page)) {
      if (page === "dashboard") {
        app.innerHTML = renderDashboard();
      } else {
        // Fixed: Proper capitalization using JS expression
        const title = page.charAt(0).toUpperCase() + page.slice(1);

        app.innerHTML = `
          <div class="flex min-h-screen">
            ${createSidebar(page)}
            <main class="flex-1 ml-64 p-10 bg-gray-50">
              <h1 class="text-4xl font-bold font-Source mb-6">${title} Page</h1>
              <p class="text-xl text-gray-600">This page is under development. Coming soon!</p>
            </main>
          </div>
        `;
      }
    }

    // Re-attach mobile menu toggle (only affects customer pages with navbar)
    document
      .getElementById("mobile-menu-btn")
      ?.addEventListener("click", () => {
        toggleMobileMenu();
        loadPage(page);
      });
  }

  // Handle browser back/forward buttons
  window.addEventListener("popstate", (e) => {
    loadPage(e.state?.page || "login");
  });

  // Initial page load based on URL
  const initialPage = location.pathname.slice(1);
  loadPage(initialPage || "login");
});
