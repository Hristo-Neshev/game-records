export const LOCAL_STORAGE_KEY = "games-records-data";

export function getAllData() {
    const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    return data;
}

export function addData(newGameData) {
    const data = getAllData();
    const list = Array.isArray(data) ? data : [];
    const exists = list.some(item => item && item.gameName === newGameData.gameName);
    if (exists) {
        throw new Error("error1");
    }
    const updatedData = [...list, newGameData];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedData));
    return updatedData;
}

// export function getData(targetId) {
//     const data = getAllData();
//     const singleGameData = data.find((gameData) => gameData.id === targetId ? gameData : []);
//     return singleGameData;
// }

// export function updateData(targetId, playsCount) {
//     const data = getAllData();
//     const list = Array.isArray(data) ? data : [];
//     const updatedData = list.map(item =>
//         item.id === targetId ? { ...item, playsCount } : item
//     );
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedData));
//     return updatedData;
// }

export function deleteSingleGameData(targetId) {
    const data = getAllData();
    const list = Array.isArray(data) ? data : [];
    const updatedData = list.filter(item => item.id !== targetId);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedData));
    return updatedData;
}

export function clearAllData() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    return [];
}

