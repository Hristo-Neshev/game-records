import toggleDialogElement from "../../../../utils/toggleDialog.js";
import addGameFormValidation from "./addGameFormValdiation.js";
import { addData, getAllData } from "../../../../services/gamesData/gamesData.js";
import renderRecords from "../../renderRecords.js";
import { showSuccess, showError } from "../../../../services/notifications/notificationEvents.js";

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
            renderRecords(updatedData);
            closeAddGameDialog(addGameDialogEl);

            // Show success notification
            showSuccess(`Game "${gameData.gameName}" added successfully!`);
        } catch (error) {
            console.error(error);
            // Show error notification
            showError('Failed to add game. Please try again.');
        }
    }
}

function closeAddGameDialog(addGameDialogEl) {
    toggleDialogElement("close", addGameDialogEl);
    addGameForm.reset();
}