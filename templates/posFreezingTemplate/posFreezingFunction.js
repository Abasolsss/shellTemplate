import { detailedTS } from "../../js/functions.js"
import { basicInputs } from "../../js/functions.js";


export const posFreezing = () => {
  const basicFunction = basicInputs()
  const textValue = basicFunction[0]
  const radioFinalVal = basicFunction[1]
  const primaryContactValue = basicFunction[2]
  const FCdetailed = basicFunction[3]
  const para = basicFunction[5]
  const textTS = detailedTS()
  localStorage.setItem("cLocation", textValue[1])
  localStorage.setItem("siteAd1", radioFinalVal[0])
  localStorage.setItem("siteAd2", radioFinalVal[1])
  localStorage.setItem("callerName", textValue[2])
  localStorage.setItem("altName", textValue[3])
  localStorage.setItem("primeNumber", primaryContactValue[0])
  localStorage.setItem("altNumber", primaryContactValue[1])
  localStorage.setItem("bestTime", textValue[4])
  localStorage.setItem("emailAd", textValue[5])

  const text = (para.innerText =
`Subject: ${textValue[0]}\r
c-Location: ${textValue[1]}\r
**Is C-Location found in Service Advisory Check?: ${radioFinalVal[0]}\r
**If yes, is the Service Advisory related to the issue reported?: ${radioFinalVal[1]} \r
**Service Advisory Description (if Available): ${textValue[2]}\r

TMPL-POSFreeze\r

Name of Caller: ${textValue[3]}\r
Primary Contact Number: ${primaryContactValue[0]}\r
Alternate Contact Name: ${textValue[4]}\r
Alternate Contact Number: ${primaryContactValue[1]}\r
Best time to Call(BTTC): ${textValue[5]}\r
Email Address(if available): ${textValue[6]}\r


Detailed Description of the issue:\r
${FCdetailed}\r

1.How many POS do the site have? ${textValue[7]}

2.Which POS is/are freezing (POS1, POS2, POS3)? ${textValue[8]}

3.Did the site experience this before? When was the last time? ${textValue[9]}

4.At what point is/are POS freezing? ${textValue[10]}

5.Is the POS freezing issue related to payment/EPC4 issue before POS froze? ${textValue[11]}

**If yes, escalate the case to L2 team. 
**If no, follow the KB instructions.
**Check previous cases opened related to the freezing issue and gather what was done to resolve the issue**

Troubleshooting/resolution:
${textTS}


Is there any ticket/s opened related to the issue in the past month? ${radioFinalVal[2]}

**If yes, note the case number/s and raise to L1.5/L2 for further investigation.`);
navigator.clipboard.writeText(text);
};


// ${console.log(para)}