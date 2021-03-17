const storeData = (target) => (data) => {
    localStorage.setItem(target, JSON.stringify(data));
}

const fetchData = (target) => {
    return JSON.parse(localStorage.getItem(target));
}

const api = {
    save: storeData,
    get: fetchData,
}

export default api;