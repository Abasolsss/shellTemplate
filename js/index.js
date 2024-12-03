import { fcFunction, netConn,eodFailedOnPos,fuelPriceChange,siteFacilityIssue,posErrorMessages, electronicPaymentOutOfOrder,scannerNotWorking,posReceiptIssues,genericTemplate,GoCoTS,papNotWorking,pumpsDown,posFreezing, stuckFuelSale, pinpadRelatedIssue, BOSPasswordReset } from "./functions.js";
import { templateValueFunct, newIssueFunct } from "./templates.js";

const templateSelect = document.getElementById("templateSelector");

const newIssueSelect = document.getElementById("newIssueSelector")

templateValueFunct();
newIssueFunct();
// bordeline
const weatherDiv = document.querySelector(".weatherDiv")

const APIKey = "60f06bb755213c4c8e5887d8f7b59046"
const url = `https://api.openweathermap.org/data/2.5/weather?q=lahug&units=metric&appid=${APIKey}`

const apiFetch = fetch(url)

weatherDiv.innerHTML = 
`
<p>Loading the weather for todays video....</p>

`

apiFetch.then(response => {
  return response.json()
})
.then(value => {
  weatherFunction(value)
})
.catch((error) => console.error(error))

const weatherFunction = (val) => {
const iconSrc = `http://openweathermap.org/img/w/${val.weather[0].icon}.png`
const roundUp = Math.ceil(val.main.temp)
  const loadTime = setTimeout(() => {
    weatherDiv.innerHTML = 
    `
    <h5>${val.sys.country} | ${val.name}</h5>
    <h5>Weather for todays video: ${val.weather[0].main}, ${val.weather[0].description}</h5>
    <h5>${roundUp}°C <img src = "${iconSrc}"></h5>
    `
  }, 3000);

  // console.log(val)
}


//random qoutes

// new issueK
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

                  case "stuckFuelSale":
                    stuckFuelSale()
                  break;


                  case "pinpadRelatedIssue":
                    pinpadRelatedIssue()
                  break;

                  case "BOSPassReset":
                    BOSPasswordReset()
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




