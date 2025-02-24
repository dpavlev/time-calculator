export default function () {
    const hourSelect = document.querySelector("#hour");
    for (let i = 0; i < 25; i++) {
        const option = document.createElement("option");
        if (i / 10 < 1) {
            option.value = "0" + i;
            option.textContent = "0" + i;
        } else {
            option.value = i;
            option.textContent = i;
        }
        hourSelect.append(option);
    }
    const minutesSelect = document.querySelector("#minutes");
    for (let i = 0; i < 60; i++) {
        const option = document.createElement("option");
        if (i / 10 < 1) {
            option.value = "0" + i;
            option.textContent = "0" + i;
        } else {
            option.value = i;
            option.textContent = i;
        }
        minutesSelect.append(option);
    }
}
