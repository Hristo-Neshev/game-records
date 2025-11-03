// Import modules if needed. Please tell BE to add type module in .libraries file for this script file.

document.addEventListener("DOMContentLoaded", function () {
    // --- Init Page ---

    // Here call needed init functions
    initHeader();

    // --- Init Functions ---
    function initHeader() {
        //  --- Elements ---
        // Prefix is not mandatory for js-classes
        const headerEl = document.querySelector(".js-tkt-header");

        // --- Attach Event Listeners ---
        headerEl.addEventListener("click", headerEventHandler);

        // --- Event Handlers ---
        function headerEventHandler(event) {
            // please add event prop even if you not use in the handler for better readability
            console.log("event handler");
        }
    }

    // --- Utils ---
    // Create uti functions here if needed
});

function eventHandler(event) {
    console.log(event);
}