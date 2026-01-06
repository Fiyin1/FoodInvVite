// src/components/inventoryitem.js

export function createInventoryItem({
  itemName,
  expiryDate,
  category,
  itemCount,
  description,
  imageSrc,
}) {
  return `
    <div class="inventory-item">
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-8 gap-8">
        
        <!-- Left: Image + Basic Info -->
        <div class="flex flex-col gap-6 flex-1">
          <div class="rounded-2xl w-full max-w-md h-48 overflow-hidden shadow-lg">
            <img
              src="${imageSrc}"
              alt="${itemName}"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="space-y-2">
            <span class="font-Source text-lg font-medium">Item Name: ${itemName}</span><br>
            <span class="font-Source text-lg">Item Expiry Date: ${expiryDate}</span>
          </div>
        </div>

        <!-- Middle: Category & Description -->
        <div class="flex flex-col gap-6 flex-1 max-w-lg">
          <div class="flex flex-col sm:flex-row gap-8 text-lg">
            <span class="font-Source">Item Category: <strong>${category}</strong></span>
            <span class="font-Source">No of Items in Category: <strong>${itemCount}</strong></span>
          </div>
          <p class="font-Source text-gray-700 leading-relaxed">
            Item Description: ${description}
          </p>
        </div>

        <!-- Right: Delete Button -->
        <div class="flex-1 flex items-center justify-end">
          <button
            onclick="handleDeleteItem('${itemName}')"
            class="flex items-center gap-3 text-red-600 hover:text-red-800 hover:bg-red-50 px-6 py-3 rounded-lg transition-all font-medium shadow-md"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            <span>Delete Item</span>
          </button>
        </div>
      </div>
      <hr class="mt-8 border-gray-300" />
    </div>
  `;
}

// Global delete handler
window.handleDeleteItem = function (itemName) {
  console.log(`Deleting ${itemName}...`);
  if (confirm(`Are you sure you want to delete "${itemName}"?`)) {
    alert(`${itemName} has been deleted.`);
    // Future: remove from DOM or call API
  }
};
