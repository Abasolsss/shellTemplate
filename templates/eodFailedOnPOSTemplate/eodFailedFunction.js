import { detailedTS } from "../../js/functions.js"
import { basicInputs } from "../../js/functions.js";


export const eodFailedOnPos = () => {
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

TMPL-EODFailed\r


Alternate Contact Name: ${textValue[2]}\r
Alternate Contact Number: ${primaryContactValue[0]}\r
Best time to Call(BTTC): ${textValue[3]}\r

Detailed Description of the issue:\r
${FCdetailed}\r

*What happened prior to the issue happening?
${textValue[4]}\r

*Did you do any troubleshooting before calling the service desk? (Please specify) 
${textValue[5]}\r

Error message encountered (screenshot required):
${textValue[6]}\r

Is there a 'Server Offline' alarm on POS? ${radioFinalVal[2]}\r
Have they successfully Closed the Shift on the POS? ${radioFinalVal[3]}\r

**If yes, confirm in RSM>POS Management **If no, follow the KB instructions.\r


Is there any ticket/s opened related to the issue in the past month? ${radioFinalVal[4]}
**If yes, note the case number/s and raise to L1.5/L2 for further investigation.\r

Troubleshooting/Resolution:
${textTS}\r

If the issue got fixed, what resolved the issue?: ${textValue[7]}\r
If the issue is not fixed, what is the next step?: ${textValue[8]}`);
navigator.clipboard.writeText(text);
};
