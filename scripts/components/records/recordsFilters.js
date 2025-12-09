import renderRecords from "./renderRecords.js";
import { getAllData } from "../../services/recordsGamesData/gamesData.js";
import initDeleteDialog from "../records/dialogs/deleteDataDialog/deleteDataDialog.js";
import initIncrementButtons from "./incrementPlays.js";
import initEdit from "./initEditButtons.js";

const filtersFormEl = document.querySelector(".js-filters-form");
const nameInputEl = document.querySelector(".js-game-name-input");
const sortFilterEl = document.querySelector(".js-sort-filter");
const tableBodyEl = document.querySelector(".js-records-table");

export default function initRecordsFilters(recordsData) {
    filtersFormEl.addEventListener("submit", filterFormSubmitHandler);
    sortFilterEl.addEventListener("change", filterFormSubmitHandler);
    nameInputEl.addEventListener("keyup", nameInputKeyupHandler);
}

export function resetFiltersForm() {
    filtersFormEl.reset();
}

function filterFormSubmitHandler(event) {
    event.preventDefault();
    const enteredName = nameInputEl.value.trim();
    const sortValue = sortFilterEl.value;

    const data = getAllData();

    if (enteredName.length === 0) {
        const sortedData = sortData(data, sortValue);
        tableBodyEl.innerHTML = "";
        renderRecords(sortedData);
    } else {
        const filteredData = data.filter(item =>
            item.gameName.toLowerCase().includes(enteredName.toLowerCase())
        );
        const sortedFilteredData = sortData(filteredData, sortValue);
        tableBodyEl.innerHTML = "";
        renderRecords(sortedFilteredData);
    }

    initDeleteDialog();
    initIncrementButtons();
    initEdit();
}

function sortData(data, sortValue) {
    let sortedData = [...data];
    if (sortValue === "most-played") {
        sortedData.sort((a, b) => b.playsCount - a.playsCount);
    } else if (sortValue === "least-played") {
        sortedData.sort((a, b) => a.playsCount - b.playsCount);
    }
    return sortedData;
}

function nameInputKeyupHandler() {
    clearTimeout(nameInputKeyupHandler.debounceTimer);

    nameInputKeyupHandler.debounceTimer = setTimeout(() => {
        filterFormSubmitHandler(new Event('submit'));
    }, 1500);
}
