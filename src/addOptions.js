export default function () {
    const hourSelects = document.querySelectorAll("select.hour");
    hourSelects.forEach((hourSelect) => {
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
    });
    const minutesSelects = document.querySelectorAll("select.minutes");
    minutesSelects.forEach((minutesSelect) => {
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
    });
    const secondsSelect = document.querySelector("#seconds");
    for (let i = 0; i < 60; i++) {
        const option = document.createElement("option");
        if (i / 10 < 1) {
            option.value = "0" + i;
            option.textContent = "0" + i;
        } else {
            option.value = i;
            option.textContent = i;
        }
        secondsSelect.append(option);
    }
}
