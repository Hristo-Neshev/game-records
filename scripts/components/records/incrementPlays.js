import { getData, updateData } from "../../services/recordsGamesData/gamesData.js";

export default function initIncrementButtons() {
    const incrementBtnEls = document.querySelectorAll(".js-increment-btn");
    if (incrementBtnEls.length === 0) {
        return;
    }

    incrementBtnEls.forEach(function (incrementBtnEl) {
        incrementBtnEl.addEventListener("click", incrementBtnHandler);
    });
}

function incrementBtnHandler(event) {
    const currentBtnEl = event.currentTarget;
    const rowEl = currentBtnEl.closest(".js-data-table-row");
    const playsCountTdEl = rowEl.querySelector(".js-plays-count-td");
    const gameId = rowEl.id;
    const oldData = getData(gameId)[0];
    const updatedData = { ...oldData, playsCount: oldData.playsCount + 1 };
    const newData = updateData(gameId, updatedData);
    playsCountTdEl.textContent = updatedData.playsCount;
}