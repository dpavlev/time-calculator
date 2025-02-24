export default function () {
    const h1 = document.querySelector("#currentTime");
    window.setInterval(refreshTime, 1000);
    function refreshTime() {
        const current = new Date(Date.now());
        h1.textContent = current.toLocaleTimeString("BG-bg");
    }
}
