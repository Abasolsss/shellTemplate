import { detailedTS } from "../../js/functions.js"
import { basicInputs } from "../../js/functions.js";

export const posErrorMessages = () => {
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
  
  console.log(para)
  const text = (para.innerText =
`Subject: ${textValue[0]}\r
c-Location: ${textValue[1]}\r
**Is C-Location found in Service Advisory Check?: ${radioFinalVal[0]}\r
**If yes, is the Service Advisory related to the issue reported?: ${radioFinalVal[1]} \r

TMPL-PosERRmsg\r

Name of Caller: ${textValue[2]}\r
Primary Contact Number: ${primaryContactValue[0]}\r
Alternate Contact Name: ${textValue[3]}\r
Alternate Contact Number: ${primaryContactValue[1]}\r
Best time to Call(BTTC): ${textValue[4]}\r
Email Address(if available): ${textValue[5]}\r

Detailed Description of the issue:\r
${FCdetailed}\r

How many POS Terminal does the site have? ${textValue[6]}
Which POS Terminal is impacted? ${textValue[7]}
Exact error message/s: (Attach a screenshot of the error) ${textValue[8]}
Transaction details (if applicable): ${textValue[9]}

Is there any ticket/s opened related to the issue in the past month? ${radioFinalVal[2]}

**If yes, note the case number/s and raise to L1.5/L2 for further investigation.

Troubleshooting/resolution:
${textTS}

If the issue got fixed, what resolved the issue? ${textValue[10]}
If the issue is not fixed, what is the next step? ${textValue[11]}`);
navigator.clipboard.writeText(text);
};
