import { detailedTS } from "../../js/functions.js"
import { basicInputs } from "../../js/functions.js";

export const pumpsDown = () => {
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

TMPL-PUMPIssue\r


Name of Caller: ${textValue[2]}\r
Primary Contact Number: ${primaryContactValue[0]}\r
Alternate Contact Name: ${textValue[3]}\r
Alternate Contact Number: ${primaryContactValue[1]}\r
Best time to Call(BTTC): ${textValue[4]}\r
Email Address(if available): ${textValue[5]}\r

Detailed Description of the issue:\r
${FCdetailed}\r

How many pump(s) is/are affected? ${textValue[6]}
If DO/GBW: Contact their Pump Maintenance Contractor.
If MBA/CMA/RBA site, call BGIS at 1-866-449-2355.

Are there any related tickets opened for the same pump/s in the past month? ${radioFinalVal[2]}

**If yes, note the case number/s for reference.

Troubleshooting/resolution:
${textTS}

If the issue got fixed, what resolved the issue? ${textValue[7]}

If the issue is not fixed, what is the next step? ${textValue[8]}
`);
navigator.clipboard.writeText(text);
};

