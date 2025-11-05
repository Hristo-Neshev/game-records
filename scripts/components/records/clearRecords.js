import { clearAllData } from "../../services/recordsGamesData/gamesData.js";

export default function initClearDataButton() {
    const clearDataButton = document.querySelector(".js-clear-data-btn");
    clearDataButton.addEventListener("click", clearDataHandler);
}

function clearDataHandler(event) {
    event.preventDefault();
    clearAllData();
    window.location.reload();
}