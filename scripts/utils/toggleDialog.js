

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
    } else if (dialogType === "edit") {
        const dialogTitleSpanEl = document.querySelector(".js-edit-dialog-title-span");
        const currentDataRowEl = triggerBtnEl.closest(".js-data-table-row");
        const gameNameTdEl = currentDataRowEl.querySelector(".js-game-name-td");
        const gameName = gameNameTdEl.textContent.trim();
        const rowId = currentDataRowEl.id;
        dialogTitleSpanEl.textContent = gameName;
        dialogEl.dataset.deleteDataId = rowId;
        // TODO pre-populate input fields
        dialogEl.show();
    } else if (dialogType === "add-data") {
        dialogEl.show();
    }
}