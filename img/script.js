const checkboxes = document.querySelectorAll(".filter input");
const cards = document.querySelectorAll(".card");
const searchInput = document.getElementById("searchInput");

// MAIN FUNCTION (FILTER + SEARCH COMBINED)
function updateProducts() {
    let searchValue = searchInput.value.toLowerCase();

    let selectedFilters = [];
    checkboxes.forEach(cb => {
        if (cb.checked) selectedFilters.push(cb.value.toLowerCase());
    });

    cards.forEach(card => {
        let name = card.dataset.name;
        let category = card.dataset.category;

        let matchSearch = name.includes(searchValue);
        let matchFilter = selectedFilters.every(f => category.includes(f));

        if (matchSearch && (selectedFilters.length === 0 || matchFilter)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// EVENTS
checkboxes.forEach(cb => cb.addEventListener("change", updateProducts));
searchInput.addEventListener("keyup", updateProducts);