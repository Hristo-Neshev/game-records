export default function toggleDialogElement(action, dialogEl) {
    switch (action) {
        case "open": dialogEl.show(); break;
        case "close": dialogEl.close(); break;
    }
}