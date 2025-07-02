import { detailedTS } from "../../js/functions.js"
import { basicInputs } from "../../js/functions.js";

export const papNotWorking = () => {
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

TMPL-PAP\r

Name of Caller: ${textValue[2]}\r
Primary Contact Number: ${primaryContactValue[0]}\r
Alternate Contact Name: ${textValue[3]}\r
Alternate Contact Number: ${primaryContactValue[1]}\r
Best time to Call(BTTC): ${textValue[4]}\r
Email Address(if available): ${textValue[5]}\r
Error message encountered(screenshot required): ${textValue[6]}
Detailed Description of the issue:\r
${FCdetailed}\r



Troubleshooting/resolution:
${textTS}


What type of transactions are getting affected? ${textValue[7]}
Was it working before?  ${radioFinalVal[2]}
**if yes, from when did it stopped working? ${textValue[8]}
Was the ICR been replaced?(Y/N) ${radioFinalVal[3]}

**if ICR was replaced, is credit working on those pumps? ${textValue[9]}
Was the Fuel Controller been replaced recently? ${radioFinalVal[4]}
If non of them are working, document the error: ${textValue[10]}

How many pump(s) is/are affected? ${textValue[11]}
Is Debit/Credit working inside? ${radioFinalVal[5]}
Is Debit/Credit working on other pumps? ${radioFinalVal[6]}
what is the error message on the ICR? ${textValue[12]}
Able to ping the ICR? ${textValue[13]}
Reviewed transaction journal for issue verification? ${textValue[14]}

Is there any ticket/s opened related to the issue in the past month? ${radioFinalVal[7]}
**if yes, note the case number/s and raise to L1.5/L2 for further investigation

**if the issue is resolved, input the details of what fixed the issue on the Resolution Notes

 If the issue got fixed, what resolved the issue? ${textValue[15]}

 If the issue is not fixed, what is the next step? ${textValue[16]}`);
navigator.clipboard.writeText(text);
};
