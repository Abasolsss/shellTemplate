import { newIssueFunct } from "./functions.js";
import { templateValueFunct } from "./templates.js";

const newIssueBtn = document.getElementById("newIssue");

newIssueBtn.addEventListener("click", () => {
  newIssueFunct();
});

templateValueFunct();
