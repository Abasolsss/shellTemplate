// import { newIssueFunct } from "./functions.js";
import { fcFunction, testFunction } from "./functions.js";
import { templateValueFunct, newIssueFunct } from "./templates.js";

const newIssueBtn = document.getElementById("newIssue");

newIssueBtn.addEventListener("click", () => {
  newIssueFunct();
});

fcFunction()

templateValueFunct();







