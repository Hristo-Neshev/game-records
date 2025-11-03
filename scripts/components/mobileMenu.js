export default function initMobileMenu() {
    const menuButtonEl = document.querySelector(".js-mobile-menu-btn");
    const mobileMenuEl = document.querySelector('.js-mobile-menu');

    menuButtonEl.addEventListener("click", (event) => {
        if (menuButtonEl.classList.contains("open")) {
            menuButtonEl.classList.remove("open");
            mobileMenuEl.classList.remove("open");
        } else {
            menuButtonEl.classList.add("open");
            mobileMenuEl.classList.add("open");
        }

    });
};
