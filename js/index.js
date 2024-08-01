import { fcFunction, netConn } from "./functions.js";
import { templateValueFunct, newIssueFunct } from "./templates.js";

const templateSelect = document.getElementById("templateSelector");

const newIssueSelect = document.getElementById("newIssueSelector")

document.addEventListener("DOMContentLoaded", () => {
  templateValueFunct();
  const newIssueBtn = document.getElementById("newIssue");
  if (newIssueBtn) {
    newIssueBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 100,
        behavior: "smooth",
      });
      newIssueFunct();
    });
  }
});



if (templateSelect) {
  templateSelect.addEventListener("change", (e) => {
    const selectedTemplate = e.currentTarget.value;
    setTimeout(() => {
      document.getElementById("testButton").addEventListener("click", () => {
        switch (selectedTemplate) {
          case "fcTemplate":
            fcFunction();
            break;

          case "netConn":
            netConn();
            break;

          default:
            break;
        }
        Swal.fire({
          title: "Good job!",
          text: "Template copied!",
          icon: "success",
        });
      });
    }, 0);
  });
}
