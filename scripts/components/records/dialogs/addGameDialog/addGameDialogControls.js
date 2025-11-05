import toggleDialogElement from "../../../../utils/toggleDialog.js";
import addGameFormValidation from "./addGameFormValdiation.js";
import { addData, getAllData } from "../../../../services/recordsGamesData/gamesData.js";
import renderRecords from "../../renderRecords.js";

const addGameForm = document.querySelector(".js-add-game-form");
const gameNameInputEl = document.querySelector(".js-add-game-form .js-add-game-name-input");
const initialGamePLaysInputEl = document.querySelector(".js-initial-plays-input");


export function addGameCancel(addGameDialogEl) {
    closeAddGameDialog(addGameDialogEl);
}

export function addGameSubmitHandler(addGameDialogEl) {
    const isFormValid = addGameFormValidation(gameNameInputEl, initialGamePLaysInputEl);

    if (!isFormValid) {
        gameNameInputEl.addEventListener("keyup", (event) => { addGameFormValidation(gameNameInputEl, initialGamePLaysInputEl); })
        initialGamePLaysInputEl.addEventListener("keyup", (event) => { addGameFormValidation(gameNameInputEl, initialGamePLaysInputEl); })
        return;
    } else {
        gameNameInputEl.removeEventListener("keyup", (event) => { addGameFormValidation(gameNameInputEl, initialGamePLaysInputEl); });
        initialGamePLaysInputEl.removeEventListener("keyup", (event) => { addGameFormValidation(gameNameInputEl, initialGamePLaysInputEl); });

        const gameData = {
            id: self.crypto.randomUUID(),
            gameName: gameNameInputEl.value.trim(),
            playsCount: Number(initialGamePLaysInputEl.value),
        }

        try {
            const updatedData = addData(gameData);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }
}

function closeAddGameDialog(addGameDialogEl) {
    toggleDialogElement("close", addGameDialogEl);
    addGameForm.reset();
}