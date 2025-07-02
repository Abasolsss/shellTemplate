import { detailedTS } from "../../js/functions.js"
import { basicInputs } from "../../js/functions.js";

export const GoCoTS = () => {
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

TMPL-GOCO\r

Name of Caller: ${textValue[2]}\r
Primary Contact Number: ${primaryContactValue[0]}\r

Detailed Description of the issue:\r
${FCdetailed}\r

Are you able to successfully warm transferred the tech to the site? ${radioFinalVal[2]}

**If no, state the reason why:
${textTS}

Service Advisory Description (if Available):${textValue[3]}

Suggested KBA:
GoCo Tech Calling for L1 Troubleshooting with Site`);
navigator.clipboard.writeText(text);
};
