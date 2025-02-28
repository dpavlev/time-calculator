import addCurrentTimeHandler from "./src/addCurrentTimeHandler.js";
import addOptions from "./src/addOptions.js";
import { currentTime } from "./src/currentTime.js";

currentTime();
addOptions();

const addCurrentTimeForm = document.querySelector("#addCurrentTime");
addCurrentTimeForm.addEventListener("submit", addCurrentTimeHandler(e));
