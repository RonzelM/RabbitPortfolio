/* =========================================
   RABBIT'S DESIGN
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   PROJECT MODAL
========================================= */

const projectCards = document.querySelectorAll(".project-card");

const projectModal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalDescription = document.getElementById("modalDescription");


projectCards.forEach(card => {

    card.addEventListener("click", () => {

        const image = card.querySelector("img");
        const title = card.querySelector("h3");
        const category = card.querySelector(".project-info p");

        modalImage.src = image.src;
        modalImage.alt = image.alt;

        modalTitle.textContent = title.textContent;

        modalCategory.textContent = category.textContent;

        modalDescription.textContent =
            "A creative project developed with attention to visual composition, typography, layout, and overall presentation.";

        projectModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* Close modal */

function closeProjectModal() {

    projectModal.classList.remove("active");

    document.body.style.overflow = "";

}


modalClose.addEventListener("click", closeProjectModal);


/* Click outside modal */

projectModal.addEventListener("click", event => {

    if (event.target === projectModal) {
        closeProjectModal();
    }

});


/* ESC key */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeProjectModal();
    }

});



/* =========================================
   PROJECT FILTER
========================================= */

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Remove active state */

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        /* Activate selected filter */

        button.classList.add("active");


        /* Get selected category */

        const filter = button.dataset.filter;


        /* Filter projects */

        projectCards.forEach(project => {

            const category = project.dataset.category;


            if (filter === "all" || category === filter) {

                project.classList.remove("hidden");

                setTimeout(() => {
                    project.classList.add("show");
                }, 50);

            } else {

                project.classList.remove("show");

                project.classList.add("hidden");

            }

        });

    });

});

/* =========================================
   ACTIVE NAVIGATION ON SCROLL
========================================= */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-item");


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop - sectionHeight * 0.3
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navItems.forEach(item => {

        item.classList.remove("active");

        const link = item.getAttribute("href");

        if (link === `#${currentSection}`) {
            item.classList.add("active");
        }

    });

}


window.addEventListener("scroll", updateActiveNavigation);

updateActiveNavigation();