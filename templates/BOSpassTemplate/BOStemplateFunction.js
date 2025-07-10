import { detailedTS } from "../../js/functions.js"
import { basicInputs } from "../../js/functions.js";

export const BOSPasswordReset = () => {
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

console.log(primaryContactValue)
  const text = (para.innerText =
`Subject: ${textValue[0]}\r
c-Location: ${textValue[1]}\r
**Is C-Location found in Service Advisory Check?: ${radioFinalVal[0]}\r
**If yes, is the Service Advisory related to the issue reported?: ${radioFinalVal[1]}\r
**Service Advisory Description (if Available): ${textValue[2]}

TMPL-PWreset\r

Alternate Contact Name: ${textValue[3]}\r
Alternate Contact Number: ${primaryContactValue[0]}\r
Best time to Call(BTTC): ${textValue[4]}\r


Detailed Description of the issue:\r
${FCdetailed}\r

Error message encountered (screenshot required): ${textValue[5]}\r

*What happened prior to the issue happening? ${textValue[6]}\r

*Did you do any troubleshooting before calling the service desk? (Please specify) ${textValue[7]}\r


Is the account locked? ${textValue[8]}
**If yes, unlock the account via Computer Management.

Is the manager trying to change their current password or can they still remember the expired password? ${textValue[9]}
**If yes, guide them with the New Password Requirement

Is the manager requesting for a password reset for forgotten password? ${textValue[10]}

Was the secret code successfully verified? ${textValue[11]}

**If yes, proceed with the password reset process.
**If no, advise them to reach out to their Territory Manager.

Troubleshooting/resolution:
${textTS}

Is there any ticket/s opened related to the issue in the past month? ${radioFinalVal[2]}\r
**If yes, note the case number/s and raise to L1.5/L2 for further investigation.

If the issue got fixed, what resolved the issue?: ${textValue[12]}
If the issue is not fixed, what is the next step?: ${textValue[13]}`);
navigator.clipboard.writeText(text);
};