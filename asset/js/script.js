document.addEventListener("DOMContentLoaded", function() {
    const carouselConfigurations = [
        {
            carousel: document.querySelector(".carousel1"),
            prev: document.querySelector(".prev1"),
            next: document.querySelector(".next1"),
            inner: document.querySelector(".inner1"),
            pagination: document.querySelector(".pagination1"),
            currentSlide: 0
        },
        {
            carousel: document.querySelector(".carousel2"),
            prev: document.querySelector(".prev2"),
            next: document.querySelector(".next2"),
            inner: document.querySelector(".inner2"),
            pagination: document.querySelector(".pagination2"),
            currentSlide: 0
        },
        {
            carousel: document.querySelector(".carousel3"),
            prev: document.querySelector(".prev3"),
            next: document.querySelector(".next3"),
            inner: document.querySelector(".inner3"),
            pagination: document.querySelector(".pagination3"),
            currentSlide: 0
        },
        {
            carousel: document.querySelector(".carousel4"),
            prev: document.querySelector(".prev4"),
            next: document.querySelector(".next4"),
            inner: document.querySelector(".inner4"),
            pagination: document.querySelector(".pagination4"),
            currentSlide: 0
        },
        {
            carousel: document.querySelector(".carousel5"),
            prev: document.querySelector(".prev5"),
            next: document.querySelector(".next5"),
            inner: document.querySelector(".inner5"),
            pagination: document.querySelector(".pagination5"),
            currentSlide: 0
        }
    ];

    carouselConfigurations.forEach((config) => {
        initializeCarousel(config);
    });

    function initializeCarousel(config) {
        const { carousel, prev, next, inner, pagination } = config;
        let currentSlide = config.currentSlide || 0;
        const slides = inner.querySelectorAll('.cCarousel-item'); // Select all carousel items
        const totalSlides = slides.length;
        const slidesPerPage = 2;

        function showSlide(slideIndex) {
            // Calculate the width of each slide based on the number of items per slide
            const slideWidth = 100 / slidesPerPage;
            inner.style.transform = `translateX(-${slideIndex * slideWidth}%)`;
            currentSlide = slideIndex;
            updatePagination();
        }

        function updatePagination() {
            const start = Math.floor(currentSlide / slidesPerPage) * slidesPerPage;
            const end = Math.min(start + slidesPerPage, totalSlides);
            let paginationHTML = "";

            for (let i = start; i < end; i++) {
                if (i === currentSlide) {
                    paginationHTML += `<span class="active">${pad(i + 1)}</span>`;
                } else {
                    paginationHTML += `<span>${pad(i + 1)}</span>`;
                }
            }
            pagination.innerHTML = paginationHTML;
        }

        prev.addEventListener("click", function() {
            if (currentSlide > 0) {
                showSlide(currentSlide - 1);
            } else {
                showSlide(totalSlides - 1);
            }
        });

        next.addEventListener("click", function() {
            if (currentSlide < totalSlides - slidesPerPage) {
                showSlide(currentSlide + 1);
            } else {
                showSlide(0);
            }
        });

        // Initialize pagination
        updatePagination();
    }

    function pad(number) {
        return (number < 10 ? "0" : "") + number;
    }
});
