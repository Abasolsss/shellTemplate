import { fcFunction, netConn,eodFailedOnPos,fuelPriceChange } from "./functions.js";
import { templateValueFunct, newIssueFunct } from "./templates.js";

const templateSelect = document.getElementById("templateSelector");

const newIssueSelect = document.getElementById("newIssueSelector")


templateValueFunct();
newIssueFunct();


// new issue
if (newIssueSelect) {
  newIssueSelect.addEventListener("change", (e) => {
    const selectedTemplate = e.currentTarget.value;
    // document.body.style.padding = 0;
    setTimeout(() => {
      document.getElementById("testButton").addEventListener("click", () => {
        switch (selectedTemplate) {
          case "fcTemplate":
            fcFunction();
            break;

          case "netConn":
            netConn();
            break;

            case "EODFailedPOS":
              eodFailedOnPos();
              break;

              case "fuelPriceChange":
                fuelPriceChange()
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

            case "EODFailedPOS":
              eodFailedOnPos();
              break;

              case "fuelPriceChange":
                fuelPriceChange()
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
