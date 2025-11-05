const dialogTitleSpanEl = document.querySelector(".js-delete-dialog-title");

export default function toggleDialogElement(action, dialogEl, triggerBtnEl) {
    const dialogType = dialogEl.dataset.type;
    const btnType = triggerBtnEl.dataset.type;
    // switch (action) {
    //     case "open": dialogEl.show(); break;
    //     case "close": dialogEl.close(); break;
    // }

    if (action === "close") {
        dialogEl.close();
        return;
    }

    if (dialogType === "delete-data" && btnType == "delete-all") {
        dialogTitleSpanEl.textContent = `All Data`;
        dialogEl.dataset.deleteDataId = "all";
        dialogEl.show();
    } else if (dialogType === "delete-data" && btnType == "delete-single") {
        const currentDataRowEl = triggerBtnEl.closest(".js-data-table-row");
        const gameNameTdEl = currentDataRowEl.querySelector(".js-game-name-td");
        const gameName = gameNameTdEl.textContent.trim();
        const rowId = currentDataRowEl.id;
        dialogTitleSpanEl.textContent = gameName;
        dialogEl.dataset.deleteDataId = rowId;
        dialogEl.show();
    }
}

function addDataDialogOpen() { }

function deleteDataDialogOpen() { }

function editDataDialogOpen() { }