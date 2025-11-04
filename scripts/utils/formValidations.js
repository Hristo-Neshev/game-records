import showValidationError from "./showValidationError.js";

export function minLengthValidation(inputEl, minLength) {
    let isValid;
    const value = inputEl.value.trim();

    if (value.length >= minLength) {
        isValid = true;
    } else {
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