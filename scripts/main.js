import initMobileMenu from "./components/mobileMenu.js";
import initRecordsComponent from "./components/records/records.js";

document.addEventListener("DOMContentLoaded", function () {
    // Initialize notification system first
    // initNotificationSystem();

    initMobileMenu();
    initRecordsComponent();
})

