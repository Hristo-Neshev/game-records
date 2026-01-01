import { clearAllData, deleteSingleGameData } from "../../../../services/recordsGamesData/gamesData.js";
import toggleDialogElement from "../../../../utils/toggleDialog.js";

export default function initDeleteDialog() {
    const deleteDialogEl = document.querySelector(".js-delete-data-dialog");
    const confirmDeleteBtnEl = document.querySelector(".js-delete-data-dialog-btn");
    const cancelDeleteBtnEl = document.querySelector(".js-cancel-delete-data-dialog-btn");

    cancelDeleteBtnEl.addEventListener("click", event => { toggleDialogElement("close", deleteDialogEl) });
    confirmDeleteBtnEl.addEventListener("click", (event) => { deleteData(deleteDialogEl) });
}

function deleteData(deleteDialogEl) {
    const deleteDataId = deleteDialogEl.dataset.deleteDataId;
    console.log(deleteDataId);
    if (deleteDataId === "all") {
        clearAllData();
    } else {
        deleteSingleGameData(deleteDataId);
        removeDataRowElement(deleteDataId);
        toggleDialogElement("close", deleteDialogEl);
    }
    window.location.reload();
}

function removeDataRowElement(deleteRowId) {
    const rowToRemoveEl = document.getElementById(deleteRowId);
    rowToRemoveEl.remove();
}