export default function showValidationError(inputEl, isValid) {
    const closestInputContainerEl = inputEl.closest(".js-single-input-container");

    if (isValid) {
        closestInputContainerEl.classList.remove("invalid");
    } else {
        closestInputContainerEl.classList.add("invalid");
    }
}