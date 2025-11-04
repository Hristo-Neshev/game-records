import renderTableRows from "./renderRecords.js";
import initRecordsFilters from "./recordsFilters.js";
import initAddGameDialog from "./dialogs/addGameDialog/addGameDialog.js";
import initClearDataButton from "./clearRecords.js";
import { getAllData } from "../../services/gamesData/gamesData.js";

export let recordsData = []
export default function initRecordsComponent() {
    const recordsComponentEl = document.querySelector(".js-records-component");

    if (!recordsComponentEl) {
        return;
    }

    const recordsData = getAllData();
    renderTableRows(recordsData);
    initRecordsFilters();
    initAddGameDialog();
    initClearDataButton();
}