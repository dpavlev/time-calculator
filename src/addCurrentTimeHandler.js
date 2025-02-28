import { getCurrentTime } from "./currentTime.js";

export default function (e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const hour = formData.get("hour");
    const minutes = formData.get("minutes");
    const newDate = getCurrentTime();
    document.querySelector("#takenTime").textContent = `Taken time: ${newDate.toLocaleTimeString("BG-bg")}`;
    newDate.setHours(newDate.getHours() + Number(hour));
    newDate.setMinutes(newDate.getMinutes() + Number(minutes));
    document.querySelector("#newTime").textContent = `Time after ${hour} hours and ${minutes} minutes: ${newDate.toLocaleTimeString("BG-bg")}`;
    setTimeout(() => {
        document.querySelector("#takenTime").textContent = "";
        document.querySelector("#newTime").textContent = "";
    }, 5000);
}
