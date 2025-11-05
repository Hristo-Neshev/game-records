import { getData, updateData } from "../../../../services/recordsGamesData/gamesData.js";
import toggleDialogElement from "../../../../utils/toggleDialog.js";

const editDialogEl = document.querySelector(".js-edit-data-dialog");
const editNameInputEl = document.querySelector(".js-edit-game-name-input");
const editPlaysCountInputEl = document.querySelector(".js-edit-plays-input");


export default function initEditDialog() {

    const confirmEditBtnEl = document.querySelector(".js-edit-data-dialog-btn");
    const cancelEditBtnEl = document.querySelector(".js-cancel-edit-data-dialog-btn");

    cancelEditBtnEl.addEventListener("click", event => { toggleDialogElement("close", editDialogEl) });
    confirmEditBtnEl.addEventListener("click", (event) => { editData(editDialogEl) });
}

function editData() {
    const gameId = editDialogEl.dataset.editDataId;
    const oldData = getData(gameId)[0];
    const updatedData = { ...oldData, playsCount: editPlaysCountInputEl.value, gameName: editNameInputEl.value.trim(), };
    const newData = updateData(gameId, updatedData);
    window.location.reload();
}