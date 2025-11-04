import { minLengthValidation, minNumberValidation, existingGameValidation } from "../../../../utils/formValidations.js";

export default function addGameFormValidation(gameNameInputEl, initialGamePLaysInputEl) {
    let isValid = true;

    const formValidationStatus = {
        isGameNameValid: minLengthValidation(gameNameInputEl, 2),
        gameNameTaken: existingGameValidation(gameNameInputEl),
        initialPlaysCount: minNumberValidation(initialGamePLaysInputEl, 1),
    }

    Object.values(formValidationStatus).forEach((status) => {
        if (!status) {
            isValid = false;
        }
    });

    return isValid;
}