import addCurrentTimeHandler from "./src/addCurrentTimeHandler.js";
import addOptions from "./src/addOptions.js";
import { currentTime } from "./src/currentTime.js";
import customDatetimeHandler from "./src/customDatetimeHandler.js";

currentTime();
addOptions();

const addCurrentTimeForm = document.querySelector("#addCurrentTime");
addCurrentTimeForm.addEventListener("submit", addCurrentTimeHandler);
const customDatetime = document.querySelector("#customDatetime");
customDatetime.addEventListener("submit", customDatetimeHandler);
