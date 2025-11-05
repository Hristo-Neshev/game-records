import { updateData } from "../../../../services/recordsGamesData/gamesData.js";
import toggleDialogElement from "../../../../utils/toggleDialog.js";

export default function initEditDialog() {
    const editDialogEl = document.querySelector(".js-edit-data-dialog");
    const confirmEditBtnEl = document.querySelector(".js-edit-data-dialog-btn");
    const cancelEditBtnEl = document.querySelector(".js-cancel-edit-data-dialog-btn");

    cancelEditBtnEl.addEventListener("click", event => { toggleDialogElement("close", editDialogEl) });
    confirmEditBtnEl.addEventListener("click", (event) => { editData(editDialogEl) });
}

function editData() {
    console.log("updateGame data");
}