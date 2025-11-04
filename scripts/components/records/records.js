import renderTableRows from "./renderRecords.js";
import initRecordsFilters from "./recordsFilters.js";
import initAddGameDialog from "./dialogs/addGameDialog/addGameDialog.js";

export let recordsData = []
export default function initRecordsComponent() {
    const recordsComponentEl = document.querySelector(".js-records-component");

    if (!recordsComponentEl) {
        return;
    }
    const recordsData = [
        { id: 1, gameName: "Catan", playsCount: 214 },
        { id: 2, gameName: "Ticket to Ride", playsCount: 173 },
        { id: 3, gameName: "Pandemic", playsCount: 96 },
        { id: 4, gameName: "Carcassonne", playsCount: 142 },
        { id: 5, gameName: "Azul", playsCount: 58 },
        { id: 6, gameName: "Gloomhaven", playsCount: 37 }
    ];
    renderTableRows(recordsData);
    initRecordsFilters();
    initAddGameDialog();
}