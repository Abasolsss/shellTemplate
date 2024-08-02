import { fcFunction, netConn } from "./functions.js";
import { templateValueFunct, newIssueFunct } from "./templates.js";

const templateSelect = document.getElementById("templateSelector");

const newIssueSelect = document.getElementById("newIssueSelector")


templateValueFunct();
newIssueFunct();

// new issue
if (newIssueSelect) {
  newIssueSelect.addEventListener("change", (e) => {
    const selectedTemplate = e.currentTarget.value;
    const modalBody = document.querySelector(".modal-backdrop")
    const modalContent = document.querySelector(".modal-content")
    const modalOpa = document.querySelector(".modal")
 
    modalBody.classList.add("display-none")
    modalContent.classList.add("display-none")
    modalOpa.classList.add("displayimport")
    
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

//current issue
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
