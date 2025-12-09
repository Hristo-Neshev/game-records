import showValidationError from "./showValidationError.js";
import { LOCAL_STORAGE_KEY, getAllData } from "../services/recordsGamesData/gamesData.js";

export function minLengthValidation(inputEl, minLength) {
    let isValid;
    const value = inputEl.value.trim();

    if (value.length >= minLength) {
        isValid = true;
    } else {
        isValid = false;
    }

    if (!existingGameValidation(inputEl)) {
        isValid = false;
    }

    showValidationError(inputEl, isValid);
    return isValid;
}

export function minNumberValidation(inputEl, minNumber) {
    let isValid;
    const value = Number(inputEl.value);

    if (value >= minNumber) {
        isValid = true;
    } else {
        isValid = false;
    }

    showValidationError(inputEl, isValid);
    return isValid;
}

export function existingGameValidation(inputEl) {
    let isValid = true;
    const newName = inputEl.value.trim();

    if (!newName) {
        isValid = false;
    } else {
        const allGames = getAllData(LOCAL_STORAGE_KEY) || [];
        const exists = allGames.some(g => (g.gameName || '').trim().toLowerCase() === newName.toLowerCase());
        isValid = !exists;
    }
    return isValid;
}