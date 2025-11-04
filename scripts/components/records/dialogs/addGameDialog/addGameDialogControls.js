import toggleDialogElement from "../../../../utils/toggleDialog.js";

const addGameForm = document.querySelector(".js-add-game-form");
const gameNameInputEl = document.querySelector(".js-game-name-input");
const initialGamePLaysInputEl = document.querySelector(".js-initial-plays-input");


export function addGameCancel(addGameDialogEl) {
    closeAddGameDialog(addGameDialogEl);
}

export function addGameSubmitHandler(event) {
    console.log("form submit");
}

function closeAddGameDialog(addGameDialogEl) {
    toggleDialogElement("close", addGameDialogEl);
    addGameForm.reset();
}