import toggleDialogElement from "../../../../utils/toggleDialog.js";
import { addGameSubmitHandler, addGameCancel } from "./addGameDialogControls.js";

export default function initAddGameDialog() {
    const addGameButtonEl = document.querySelector(".js-add-game-btn");
    const addGameDialogEl = document.querySelector(".js-add-game-dialog");
    const addGameSubmitBtnEl = document.querySelector(".js-add-game-submit-button");
    const cancelDialogBtnEl = document.querySelector(".js-add-game-cancel-button");

    addGameButtonEl.addEventListener("click", (event) => { toggleDialogElement("open", addGameDialogEl) });
    addGameSubmitBtnEl.addEventListener("click", () => addGameSubmitHandler(addGameDialogEl));
    cancelDialogBtnEl.addEventListener("click", (event) => addGameCancel(addGameDialogEl));
}