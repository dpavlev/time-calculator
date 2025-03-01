export default function (e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const years = formData.get("years");
    const days = formData.get("days");
    const hours = formData.get("hours");
    const minutes = formData.get("minutes");
    const seconds = formData.get("seconds");
    const units = formData.get("convUnit");
    let result = 0;
    switch (units) {
        case "years": {
            result += +seconds / 31556952 + +minutes / 525949 + +hours / 8766 + +days / 365 + +years;
            break;
        }
        case "days": {
            result += +seconds / 86400 + +minutes / 1440 + +hours / 24 + +days + +years * 0.002738;
            break;
        }
        case "hours": {
            result += +seconds / 3600 + +minutes / 60 + +hours + +days * 0.041667 + +years * 0.000114;
            break;
        }
        case "minutes": {
            result += +seconds / 60 + +minutes + +hours * 0.016667 + +days * 0.000694 + +years * 0.0000019013;
            break;
        }
        case "seconds": {
            result += +seconds + +minutes * 0.016667 + +hours * 0.000278 + +days * 0.000011574 + +years * 0.000000031689;
            break;
        }
    }
    document.querySelector("#resultTime").textContent = `Time converted to ${units}: ${result}`;
    setTimeout(() => {
        document.querySelector("#resultTime").textContent = "";
    }, 5000);
}
