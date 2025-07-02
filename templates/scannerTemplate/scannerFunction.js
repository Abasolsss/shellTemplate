import { detailedTS } from "../../js/functions.js"
import { basicInputs } from "../../js/functions.js";


export const scannerNotWorking = () => {
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
**Service Advisory Description (if Available): ${textValue[2]}

TMPL-SCANNER\r

Name of Caller: ${textValue[3]}\r
Primary Contact Number: ${primaryContactValue[0]}\r
Alternate Contact Name: ${textValue[4]}\r
Alternate Contact Number: ${primaryContactValue[1]}\r
Best time to Call(BTTC): ${textValue[5]}\r
Email Address(if available): ${textValue[6]}\r

Detailed Description of the issue:\r
${FCdetailed}\r

Is this a POS or PDI scanner? ${textValue[7]}
**If POS, check the following:
Are all items not scanning? ${radioFinalVal[2]}
How many scanners are impacted? ${textValue[8]}
Which POS is the scanner connected? ${textValue[9]}
Did you reprogram the scanner? ${textValue[10]}


*If PDI, check the KB article for specific instructions.

Are there any related tickets opened for the same device in the past month? ${radioFinalVal[3]} 
**If yes, note the case number/s and raise to L2 for possible replacement

Model/Device Type: ${textValue[11]}
Error Message/s (if applicable) ${textValue[12]}
Have you tried programming the scanner? ${textValue[13]}

Troubleshooting/resolution:
${textTS}

If the issue got fixed, what resolved the issue? ${textValue[14]}

If the issue is not fixed, what is the next step? ${textValue[15]}`);
navigator.clipboard.writeText(text);
};
