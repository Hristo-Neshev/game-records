const totalCounterEl = document.querySelector(".js-total-played-counter");

export default function updateTotalCounter(totalGamePlayed, increment) {
    if (!totalCounterEl) {
        return;
    }

    if (increment) {
        const currentTotal = Number(totalCounterEl.textContent) + 1;
         totalCounterEl.textContent = currentTotal;
    } else if (totalGamePlayed !== null) {
        totalCounterEl.textContent = totalGamePlayed;
    }
}