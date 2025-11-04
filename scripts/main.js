import initMobileMenu from "./components/mobileMenu.js";
import initRecordsComponent from "./components/records/records.js";
import { initNotificationSystem } from "./services/notifications/index.js";

document.addEventListener("DOMContentLoaded", function () {
    // Initialize notification system first
    initNotificationSystem();

    initMobileMenu();
    initRecordsComponent();
})

