import { elCreator, appendElement } from "../../services/elCreatorJS/el-creator.js";
import updateTotalCounter from "./updateTotalCounter.js";

export default function renderRecords(recordsData) {
    const tableBodyEl = document.querySelector(".js-records-table");
    const recordsInnerContainerEl = document.querySelector(".js-records-inner-container");

    if (recordsData.length === 0) {
        const notFoundTitleEl = elCreator("notFoundMessage", []);
        const notFoundMsgEl = document.querySelector(".js-records-not-found");
        if (notFoundMsgEl) {
            return;
        }
        appendElement(notFoundTitleEl, recordsInnerContainerEl);
    } else {
        const notFoundMsgEl = document.querySelector(".js-records-not-found");

        if (notFoundMsgEl) {
            notFoundMsgEl.remove();
        }

        let totalPlays = 0;

        tableBodyEl.innerHTML = "";
        recordsData.forEach(function (rowData) {
            const rowEl = elCreator("recordsTableRow", rowData);
            appendElement(rowEl, tableBodyEl);
            totalPlays += Number(rowData.playsCount);
        });
        updateTotalCounter(totalPlays);
    }
}