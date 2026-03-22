let currentSlide = 0;

const slidesContainer = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;
const dots = document.querySelectorAll(".dot");

function updateSlider() {
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach(d => d.classList.remove("active"));
    dots[currentSlide].classList.add("active");
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

function goToSlide(i) {
    currentSlide = i;
    updateSlider();
}

// AUTO SLIDE
setInterval(nextSlide, 4000);

function toggleMenu(){
    document.getElementById("navLinks").classList.toggle("active");
}

function closeAd() {
    let ad = document.getElementById("topAd");
    ad.style.height = "0";
    ad.style.padding = "0";
    ad.style.margin = "0";
    ad.style.opacity = "0";

    setTimeout(() => {
        ad.style.display = "none";
    }, 400);
}


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

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // GET VALUES
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // ERROR ELEMENTS
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMsg = document.getElementById("successMsg");

    // RESET
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMsg.textContent = "";

    let isValid = true;

    // NAME VALIDATION
    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    // EMAIL VALIDATION
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }

    // MESSAGE VALIDATION
    if (message === "") {
        messageError.textContent = "Message cannot be empty";
        isValid = false;
    }

    // SUCCESS
    if (isValid) {
        successMsg.textContent = "Message sent successfully! ✅";
        form.reset();
    }
});