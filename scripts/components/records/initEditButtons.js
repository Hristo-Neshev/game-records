import toggleDialogElement from "../../utils/toggleDialog.js";
import initEditDialog from "./dialogs/editGameDialog/editGameDialog.js";

const editDialogEl = document.querySelector(".js-edit-data-dialog");

export default function initEdit() {
    const editButtonEls = document.querySelectorAll(".js-edit-data-btn");
    if (editButtonEls.length === 0) {
        return;
    }
    initEditDialog();

    editButtonEls.forEach(function (editBtnEl) {
        editBtnEl.addEventListener("click", editButtonsHandler);
    });
}

function editButtonsHandler(event) {
    const currentBtnEl = event.currentTarget;
    toggleDialogElement("open", editDialogEl, currentBtnEl);
}