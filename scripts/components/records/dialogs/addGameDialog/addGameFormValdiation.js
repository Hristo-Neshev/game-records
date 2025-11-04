import { minLengthValidation, minNumberValidation } from "../../../../utils/formValidations.js";

export default function addGameFormValidation(gameNameInputEl, initialGamePLaysInputEl) {
    let isValid = true;

    const formValidationStatus = {
        gameName: minLengthValidation(gameNameInputEl, 2),
        initialPlaysCount: minNumberValidation(initialGamePLaysInputEl, 1),
    }

    Object.values(formValidationStatus).forEach((status) => {
        if (!status) {
            isValid = false;
        }
    });

    return isValid;
}