import { detailedTS } from "../../js/functions.js"
import { basicInputs } from "../../js/functions.js";

export const fuelPriceChange = () => {
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
  
  console.log(para)
  const text = (para.innerText =
`Subject: ${textValue[0]}\r

c-Location: ${textValue[1]}\r

**Is C-Location found in Service Advisory Check?: ${radioFinalVal[0]}\r

**If yes, is the Service Advisory related to the issue reported?: ${radioFinalVal[1]} \r

**Service Advisory Description (if Available): ${textValue[2]}


TMPL-FuelPrice\r

Alternate Contact Name: ${textValue[3]}\r

Alternate Contact Number: ${primaryContactValue[0]}\r

Best time to Call(BTTC): ${textValue[4]}\r




Detailed Description of the issue:\r
${FCdetailed}\r


Error message encountered (screenshot required):
${textValue[5]}\r

*What happened prior to the issue happening?
${textValue[6]}\r

*Did you do any troubleshooting before calling the service desk? (Please specify)
${textValue[7]}\r


What time did the issue occur: ${textValue[8]}\r
What Fuel Grades are impacted: ${textValue[9]}\r
Can the site change the prices manually through RSM/POS? ${radioFinalVal[2]}
Did they check for BOS offline or server offline message? ${radioFinalVal[3]}
(if this is the case they should be following the server offline KB)

Troubleshooting/Resolution:
${textTS}\r

Is there any ticket/s opened related to the issue in the past month? ${radioFinalVal[4]}

**If yes, note the case number/s and raise to L1.5/L2 for further investigation.

 If the issue got fixed, what resolved the issue?: ${textValue[10]}\r

 If the issue is not fixed, what is the next step? ${textValue[11]}`);
navigator.clipboard.writeText(text);
};
