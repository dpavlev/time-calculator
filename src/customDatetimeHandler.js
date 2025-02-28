export default function (e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const startDate = formData.get("startDate");
    const startHour = formData.get("startHour");
    const startMinutes = formData.get("startMinutes");
    const hour = formData.get("hour");
    const minutes = formData.get("minutes");
    const dateString = `${startDate}T${startHour}:${startMinutes}`;
    const result = new Date(dateString);
    document.querySelector("#startDatetime").textContent = `Start datetime: ${result.toLocaleString("BG-bg")}`;
    result.setHours(result.getHours() + Number(hour));
    result.setMinutes(result.getMinutes() + Number(minutes));
    document.querySelector("#resultDatetime").textContent = `Datetime after ${hour} hours and ${minutes} minutes: ${result.toLocaleString("BG-bg")}`;
    setTimeout(() => {
        document.querySelector("#startDatetime").textContent = "";
        document.querySelector("#resultDatetime").textContent = "";
    }, 5000);
    // console.log(result.toLocaleString("BG-bg"));
}
