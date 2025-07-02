
import { detailedTS } from "../../js/functions.js"
import { basicInputs } from "../../js/functions.js";


export const netConn = () => {
  const basicFunction = basicInputs()
  const textValue = basicFunction[0]
  const radioFinalVal = basicFunction[1]
  const primaryContactValue = basicFunction[2]
  const FCdetailed = basicFunction[3]
  const textTS = detailedTS()
  const para = basicFunction[5]

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

TMPL-NetConn\r

Name of Caller: ${textValue[2]}\r
Primary Contact Number: ${primaryContactValue[0]}\r
Alternate Contact Name: ${textValue[3]}\r
Alternate Contact Number: ${primaryContactValue[1]}\r
Best time to Call(BTTC): ${textValue[4]}\r
Email Address(if available): ${textValue[5]}\r

Detailed Description of the issue:\r
${FCdetailed}\r

Is the site able to process transactions from POS and or Pumps? ${radioFinalVal[2]}

Is this an RTM site? ${radioFinalVal[3]}

**If yes, please note the cutover date from the RTM sites file: ${textValue[6]}

Is the site offline on toolset? ${radioFinalVal[4]}

Check the status of the devices.
** if RTM, check Meraki and VMware
** if non-RTM, check the Cybera

Is the network cable/s properly connected? ${radioFinalVal[5]}

Was the modem Power cycled? ${radioFinalVal[6]}

Is there any ticket/s opened related to the issue in the past month? ${radioFinalVal[7]}

**If yes, note the case number/s and raise to L1.5/L2 for further investigation.

Troubleshooting/Resolution:
${textTS}

If the issue got fixed, what resolved the issue?${textValue[7]}
If the issue is not fixed, what is the next step?${textValue[8]}`);
navigator.clipboard.writeText(text);
};