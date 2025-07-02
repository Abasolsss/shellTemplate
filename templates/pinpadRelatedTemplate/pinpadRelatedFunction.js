import { detailedTS } from "../../js/functions.js"
import { basicInputs } from "../../js/functions.js";


export const pinpadRelatedIssue = () => {
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
**If yes, is the Service Advisory related to the issue reported?: ${radioFinalVal[1]}\r
**Service Advisory Description (if Available):${textValue[2]}

TMPL-PinPad\r

Name of Caller: ${textValue[3]}\r
Primary Contact Number: ${primaryContactValue[0]}\r
Alternate Contact Name: ${textValue[4]}\r
Alternate Contact Number: ${primaryContactValue[1]}\r
Best time to Call(BTTC): ${textValue[5]}\r
Email Address(if available): ${textValue[6]}\r

Error message encountered (screenshot required)

Detailed Description of the issue:\r
${FCdetailed}\r

Model/Device Type: ${textValue[7]}
Which POS is the Pinpad connected to:: ${textValue[8]}
How many devices are impacted: ${textValue[9]}
NVP Value Status: ${textValue[10]}
Have you tried to initialize pinpad?: ${textValue[11]}
Is the device physically damaged (cut/frayed cable, button not working, cracked/broken)?: ${textValue[12]}

**If yes, assign to L2 for tech dispatch.

Is there any ticket/s opened related to the issue in the past month? ${radioFinalVal[2]}
**If yes, note the case number/s and raise to L1.5/L2 for further investigation.

Troubleshooting/resolution:
${textTS}


If the issue got fixed, what resolved the issue?: ${textValue[13]}
If the issue is not fixed, what is the next step?: ${textValue[14]}`);
navigator.clipboard.writeText(text);
};
