export function currentTime() {
    const h1 = document.querySelector("#currentTime");
    window.setInterval(refreshTime, 1000);
    function refreshTime() {
        const current = getCurrentTime();
        h1.textContent = current.toLocaleTimeString("BG-bg");
    }
}

export function getCurrentTime() {
    return new Date(Date.now());
}
