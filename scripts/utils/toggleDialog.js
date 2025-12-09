const editNameInputEl = document.querySelector(".js-edit-game-name-input");
const editPlaysInputEl = document.querySelector(".js-edit-plays-input");

export default function toggleDialogElement(action, dialogEl, triggerBtnEl) {
    const dialogType = dialogEl.dataset.type;

    if (action === "close") {
        dialogEl.close();
        return;
    }

    const btnType = triggerBtnEl.dataset.type;

    if (dialogType === "delete-data" && btnType == "delete-all") {
        const dialogTitleSpanEl = document.querySelector(".js-delete-dialog-title-span");
        dialogTitleSpanEl.textContent = `All Data`;

        dialogEl.dataset.deleteDataId = "all";
        dialogEl.show();
    } else if (dialogType === "delete-data" && btnType == "delete-single") {
        const dialogTitleSpanEl = document.querySelector(".js-delete-dialog-title-span");
        const currentDataRowEl = triggerBtnEl.closest(".js-data-table-row");
        const gameNameTdEl = currentDataRowEl.querySelector(".js-game-name-td");
        const gameName = gameNameTdEl.textContent.trim();
        const rowId = currentDataRowEl.id;

        dialogTitleSpanEl.textContent = gameName;
        dialogEl.dataset.deleteDataId = rowId;
        dialogEl.show();
    } else if (dialogType === "edit-data") {
        const dialogTitleSpanEl = document.querySelector(".js-edit-dialog-title-span");
        const currentDataRowEl = triggerBtnEl.closest(".js-data-table-row");
        const gameNameTdEl = currentDataRowEl.querySelector(".js-game-name-td");
        const gamePlayCountsTdEl = currentDataRowEl.querySelector(".js-plays-count-td");

        const gameName = gameNameTdEl.textContent.trim();
        const playsCount = gamePlayCountsTdEl.textContent.trim();
        const rowId = currentDataRowEl.id;

        dialogTitleSpanEl.textContent = gameName;
        dialogEl.dataset.editDataId = rowId;
        editNameInputEl.value = gameName;
        editPlaysInputEl.value = Number(playsCount);
        dialogEl.show();
    } else if (dialogType === "add-data") {
        dialogEl.show();
    }
}