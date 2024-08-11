import { fcFunction, netConn,eodFailedOnPos,fuelPriceChange,siteFacilityIssue,posErrorMessages, electronicPaymentOutOfOrder,scannerNotWorking,posReceiptIssues,genericTemplate,GoCoTS,papNotWorking,pumpsDown,posFreezing } from "./functions.js";
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

                case "siteFacilityIssue":
                  siteFacilityIssue()
                  break;

                  case "posErrorMessages":
                  posErrorMessages()
                  break;

                  case "electronicPaymentOutOfOrder":
                  electronicPaymentOutOfOrder()
                  break;

                  case "genericTemplate":
                    genericTemplate()
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

                case "siteFacilityIssue":
                  siteFacilityIssue()
                  break;
                  
                  case "posErrorMessages":
                  posErrorMessages()
                  break;

                  case "electronicPaymentOutOfOrder":
                  electronicPaymentOutOfOrder()
                  break;
                  
                  case "scannerNotWorking":
                    scannerNotWorking()
                  break;


                  case "posReceiptIssues":
                    posReceiptIssues()
                  break;

                  case "genericTemplate":
                    genericTemplate()
                  break;

                  case "GoCoTS":
                    GoCoTS()
                  break;

                  case "papNotWorking":
                    papNotWorking()
                  break;

                  case "pumpsDown":
                    pumpsDown()
                  break;

                  case "posFreezing":
                   posFreezing()
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


     const resetBtn = document.getElementById("resetBTN")


resetBtn.addEventListener("click", () => {
  Swal.fire({
    title: 'Warning!',
    text: 'Are you sure you want to reset the template?',
    showDenyButton: true,
    confirmButtonText: 'Yes',
    denyButtonText: 'No',
     icon: "warning",
    customClass: {
      actions: 'my-actions',
      cancelButton: 'order-1 right-gap',
      confirmButton: 'order-2',
      denyButton: 'order-3',
    },
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.reload();
      localStorage.removeItem("cLocation")
      localStorage.removeItem("siteAd1")
      localStorage.removeItem("siteAd2")
      localStorage.removeItem("callerName")
      localStorage.removeItem("primeNumber")
      localStorage.removeItem("altNumber")
      localStorage.removeItem("bestTime")
      localStorage.removeItem("emailAd")
      localStorage.removeItem("altName")
    } else if (result.isDenied) {
      Swal.fire('Resetting template cancelled', '', 'info')
    }
  })
})

