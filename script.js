// script.js
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('searchInput');
    const productGrid = document.getElementById('productGrid');
    const emptyState = document.getElementById('emptyState');

    let currentCategory = 'All';
    let currentSearch = '';

    // Function to generate the HTML for a single product
    function createProductHTML(product) {
        
        // 🌟 NEW FRIENDLY UI: Generate a neat pricing list for each device
        let devicesHTML = '';
        if (product.devices && product.devices.length > 0) {
            const deviceList = product.devices.map(dev => `
                <div class="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-sm px-2 py-1.5 mb-1 hover:bg-gray-100 transition-colors">
                    <div class="flex items-center text-[10px] sm:text-[11px] font-medium text-gray-700">
                        <i class="fa-solid fa-check text-green-500 mr-1.5"></i> ${dev.name}
                    </div>
                    <div class="flex items-center">
                        <span class="text-[11px] font-bold text-brand-orange">${dev.newPrice}</span>
                    </div>
                </div>
            `).join('');
            
            devicesHTML = `<div class="mb-3 mt-1 flex flex-col">${deviceList}</div>`;
        }

        return `
            <article class="product-card border border-brand-border bg-white rounded-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full">
                <div class="relative p-3 pb-0 shrink-0">
                    <div class="border-[5px] ${product.borderColor} flex items-center justify-center bg-white overflow-hidden aspect-square">
                        <img src="${product.image}" alt="${product.title}" class="w-full h-full object-contain">
                    </div>
                    
                </div>
                <div class="p-4 flex flex-col flex-grow">
                    <span class="text-[11px] text-gray-500 font-medium mb-1">${product.category}</span>
                    <h3 class="font-bold text-gray-900 text-[15px] mb-1 leading-tight">${product.title}</h3>
                    <p class="text-xs text-gray-600 mb-3 line-clamp-2">${product.description}</p>
                    
                    <!-- NEW DEVICE PRICING LIST -->
                    ${devicesHTML}
                    
                    <div class="flex items-center text-brand-green text-[11px] font-semibold mb-4 mt-auto">
                        <i class="fa-solid fa-circle-check mr-1.5"></i> 1 months warranty for replacement
                    </div>
                    
                    
                </div>
            </article>
        `;
    }

    // Function to filter and display products
    function updateGrid() {
        const filteredProducts = products.filter(product => {
            const matchesCategory = (currentCategory === 'All') || (product.category === currentCategory);
            const matchesSearch = product.title.toLowerCase().includes(currentSearch);
            return matchesCategory && matchesSearch;
        });

        if (filteredProducts.length === 0) {
            productGrid.innerHTML = '';
            emptyState.classList.remove('hidden');
        } else {
            emptyState.classList.add('hidden');
            productGrid.innerHTML = filteredProducts.map(product => createProductHTML(product)).join('');
        }
    }

    // Category Button Click Events
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetBtn = e.currentTarget;
            
            filterBtns.forEach(b => {
                b.classList.remove('bg-brand-dark', 'text-white', 'border-brand-dark', 'hover:bg-gray-800');
                b.classList.add('bg-white', 'text-gray-700', 'border-gray-300', 'hover:bg-gray-50');
            });

            targetBtn.classList.remove('bg-white', 'text-gray-700', 'border-gray-300', 'hover:bg-gray-50');
            targetBtn.classList.add('bg-brand-dark', 'text-white', 'border-brand-dark', 'hover:bg-gray-800');

            currentCategory = targetBtn.dataset.filter;
            updateGrid();
        });
    });

    // Search Input Event
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase().trim();
        updateGrid();
    });

    // Initial load
    updateGrid();
});