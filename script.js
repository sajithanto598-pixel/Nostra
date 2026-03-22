// SELECT ELEMENTS
const searchInput = document.querySelector(".search-box input");
const checkboxes = document.querySelectorAll(".filter input");
const cards = document.querySelectorAll(".card");


// FUNCTION: FILTER PRODUCTS
function filterProducts() {

    const searchValue = searchInput.value.toLowerCase();

    // GET SELECTED FILTER VALUES
    let selectedFilters = [];

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedFilters.push(checkbox.parentElement.textContent.trim().toLowerCase());
        }
    });

    // LOOP THROUGH ALL CARDS
    cards.forEach((card) => {

        const name = card.dataset.name.toLowerCase();
        const category = card.dataset.category.toLowerCase();

        // SEARCH MATCH
        const matchesSearch = name.includes(searchValue);

        // FILTER MATCH
        const matchesFilter =
            selectedFilters.length === 0 ||
            selectedFilters.some(filter => category.includes(filter));

        // FINAL SHOW / HIDE
        if (matchesSearch && matchesFilter) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


// SEARCH EVENT
searchInput.addEventListener("keyup", filterProducts);


// CHECKBOX EVENT
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", filterProducts);
});
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}