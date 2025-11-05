import renderTableRows from "./renderRecords.js";
import initRecordsFilters from "./recordsFilters.js";
import initAddGameDialog from "./dialogs/addGameDialog/addGameDialog.js";
import initClearDataButton from "../records/clearRecords.js";
import initDeleteDialog from "../records/dialogs/deleteDataDialog/deleteDataDialog.js";
import initIncrementButtons from "./incrementPlays.js";
import initEditDialog from "./dialogs/editGameDialog/editGameDialog.js";
import initEdit from "./initEditButtons.js";
import { getAllData } from "../../services/recordsGamesData/gamesData.js";

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
    initDeleteDialog();
    initIncrementButtons();
    initEdit();
}