import { clearAllData, } from "../../services/recordsGamesData/gamesData.js";
import toggleDialogElement from "../../utils/toggleDialog.js";

const deleteDataDialog = document.querySelector(".js-delete-data-dialog");

export default function initClearDataButton() {
    const deleteSingleGameBtnEls = document.querySelectorAll(".js-delete-data-btn");
    deleteSingleGameBtnEls.forEach(function (deleteGameBtnEl) {
        deleteGameBtnEl.addEventListener("click", deleteDataHandler);
    })

}

function deleteDataHandler(event) {
    event.preventDefault();
    const currentBtnEl = event.currentTarget;
    toggleDialogElement("open", deleteDataDialog, currentBtnEl);
}

// function deleteAllRecords() {
//     clearAllData();
//     window.location.reload();
// }

// function deleteSingleRecord(deleteBtn) {
//     console.log(deleteBtn);
// }

