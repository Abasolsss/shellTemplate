
// import { fcFunction, netConn, basicInputs } from "./functions.js";

import { basicInputs } from "./functions.js";

// HTML templates directory
import { FCofflineTemplateDir } from "../templates/FCofflineTemplate/FCofffline.js"
import { netConnTemplateDir } from "../templates/netConnTemplate/netConnTemplate.js";
import { EODfailedOnPOSDir } from "../templates/eodFailedOnPOSTemplate/eodFailedOnPOS.js";
import { fuelPriceChangeDir } from "../templates/fuelPriceChangeTemplate/fuelPriceChange.js";
import { siteFacilityIssueDir } from "../templates/siteFacilityIssueTemplate/siteFacilityIssue.js";
import { POSerrorMSGDir } from "../templates/POSerrorMSGtemplate.js/POSerrorMSG.js";
import { EPCtemplateDIR } from "../templates/epcTemplate/EPC.js";
import { scannerNotworkingDIR } from "../templates/scannerTemplate/scannerTemplate.js";
import  { POSreceiptDIR } from "../templates/POSreceipTemplate/POSreceipt.js"
import { genericTemplateDIR } from "../templates/genericTemplate/genericTemplate.js";
import { GOCOtemplateDIR } from "../templates/gocoTemplate/goco.js";
import { PAPnotworkingDIR } from "../templates/papNotWokingTemplate/papNotworking.js";
import { pumpsDownDir } from "../templates/pumpsDownTemplate/pumpsDown.js";
import { POSfreezingDIR } from "../templates/posFreezingTemplate/posFreezing.js";
import { stuckSaleDIR } from "../templates/stuckSaleTemplate/stuckSale.js";
import { BOStemplateDIR } from "../templates/BOSpassTemplate/BOStemplate.js";
import { pinpadRelatedDIR } from "../templates/pinpadRelatedTemplate/pinpadRelated.js";


const removeItems = () => {
          localStorage.removeItem("cLocation")
          localStorage.removeItem("siteAd1")
          localStorage.removeItem("siteAd2")
          localStorage.removeItem("callerName")
          localStorage.removeItem("primeNumber")
          localStorage.removeItem("altNumber")
          localStorage.removeItem("bestTime")
          localStorage.removeItem("emailAd")
          localStorage.removeItem("altName")
}



const templateSelect = document.getElementById("templateSelector");

const templateShower = document.getElementById("templateShower");

const newIssueSelect = document.getElementById("newIssueSelector")

export const array = [
  {
    templateName: "fcTemplate",
    template: 
        FCofflineTemplateDir()
      ,
  },

  {
    templateName: "netConn",
    template: 
    netConnTemplateDir()
    ,
  },

  {
    templateName: "EODFailedPOS",
    template: 
    EODfailedOnPOSDir()
    ,
  },

  {
    templateName: "fuelPriceChange",
    template: 
    fuelPriceChangeDir()
  },

  {
    templateName: "siteFacilityIssue",
    template:
    siteFacilityIssueDir()
  },

  {
    templateName: "posErrorMessages",
    template:  
    POSerrorMSGDir()
  },


  {
    templateName: "electronicPaymentOutOfOrder",
    template: 
    EPCtemplateDIR()
  },

  {
    templateName: "scannerNotWorking",
    template:
    scannerNotworkingDIR()
  },

  {
    templateName: "posReceiptIssues",
    template:
    POSreceiptDIR()
  },

  {
    templateName: "genericTemplate",
    template: 
    genericTemplateDIR()
  },

  {
    templateName: "GoCoTS",
    template: GOCOtemplateDIR()
  },

  {
    templateName: "papNotWorking",
    template:  PAPnotworkingDIR()
  }, 

  {
    templateName: "pumpsDown",
    template: pumpsDownDir()
  },

  {
    templateName: "posFreezing",
    template: POSfreezingDIR()
  },

  {
    templateName: "stuckFuelSale",
    template: stuckSaleDIR()
  },


  {
    templateName: "BOSPassReset",
    template: BOStemplateDIR()
  },


  {
    templateName: "pinpadRelatedIssue",
    template: pinpadRelatedDIR()
  },



];



//functions
export function templateValueFunct() {
  templateSelect.addEventListener("change", (e) => {
    const values = e.currentTarget.value;
    for (let i = 0; i < array.length; i++) {
      const issueTemplate = array[i].template;
      switch (values) {
        case array[i].templateName:
          removeItems()
          templateShower.innerHTML = `
              ${issueTemplate}
            `;
          break;
        default:
          break;
      }
    }
  });
}

export function newIssueFunct() {
  newIssueSelect.addEventListener("change", (e) => {
    const values = e.currentTarget.value;
    const test = document.querySelector("body")
    test.classList.add("modals")
    for (let i = 0; i < array.length; i++) {
      const issueTemplate = array[i].template;
      switch (values) {
        case array[i].templateName:
         window.scrollTo({
            top: 0,
            left: 100,
            behavior: "smooth",
          });
          templateShower.innerHTML = `
              ${issueTemplate}
            `;
            templateSelect.selectedIndex = i += 2;
            // newIssueButton.selectedIndex = 0;
          const test = basicInputs()
          const cLocation = localStorage.getItem("cLocation")
          const siteAd1 = localStorage.getItem("siteAd1")
          const siteAd2 = localStorage.getItem("siteAd2")
          const callerName = localStorage.getItem("callerName")
          const altName = localStorage.getItem("altName")
          const bestTime = localStorage.getItem("bestTime")
          const emailAd = localStorage.getItem("emailAd")
          const primeNum = localStorage.getItem("primeNumber")
          const altNum = localStorage.getItem("altNumber")


          const contactInput = test[7]
          const inputText = test[5]
          const inputTextVal = []
              inputText.forEach((el) => {
                inputTextVal.push(el)
              })
              inputTextVal[1].value = cLocation //cLocation
              inputTextVal[2].value = callerName // callerName
              inputTextVal[3].value = altName //alternative name
              inputTextVal[4].value = bestTime // Best time to call
              inputTextVal[5].value = emailAd // Email Add
              
              // const primeNumVal = parseInt(primeNum)

              const contactInputsFinal = []
              contactInput.forEach((e) => {
                contactInputsFinal.push(e)
              })

       
              contactInputsFinal[0].value = primeNum

             
              contactInputsFinal[1].value = altNum

              // console.log(contactDetailsVal)
              
              
  
          

              const radioName = test[6]
              // console.log(test[2])
              const radioArrName = []
              radioName.forEach((el) => {
                radioArrName.push(el)
              })
              const finalRadio = radioArrName.slice(1,3)
              const saRad1 = document.querySelectorAll(`input[name="${finalRadio[0]}"]`);

              const saRad2 = document.querySelectorAll(`input[name="${finalRadio[1]}"]`);

              const saReValue1 = saRad1.value = siteAd1
              const saReValue2 = saRad2.value = siteAd2
              if(saReValue1 === "No") {
                saRad1[1].checked = true
              } else if(saReValue1 === "Yes") {
                saRad1[0].checked = true
              } else {
                saRad1[1].checked = false
                saRad1[0].checked = false
              }

              if(saReValue2 === "No") {
                saRad2[1].checked = true
              } else if(saReValue2 === "Yes") {
                saRad2[0].checked = true
              } else {
                saRad1[1].checked = false
                saRad1[0].checked = false
              }

      
              
          break;
        default:
          break;
      }
    }
  });
}
