 export function basicInputs () {
  const basicInputsArr = [];

  const templateShower = document.getElementById("templateShower");

  const inputText = new Set(
    Array.from(templateShower.querySelectorAll(`input[type="text"]`))
  );

  const inputRadio = new Set(
    Array.from(templateShower.querySelectorAll(`input[type="radio"]`))
  );

  const primaryContact = new Set(
    Array.from(templateShower.querySelectorAll(`input[type="number"]`))
  );

  const inputRadioName = Array.from(inputRadio).map(
    (radioName) => radioName.name
  );

  const inputTextValue = Array.from(inputText).map((input) => input.value);

  const primaryContactValue = Array.from(primaryContact).map(
    (number) => number.value
  );

  let FCradioArr = [];

  let radioValue;

  let textValue = [];

  let radioFinalVal = [];

  let primaryNumVal = []

  inputTextValue.forEach((textVal) => {
    if (textVal === "") {
      const noVal = "N/A";
      textValue.push(noVal);
    } else {
      textValue.push(textVal);
    }
  });

  primaryContactValue.forEach((el) => {
      if(el === "") {
        const noVal = 0
        primaryNumVal.push(noVal)
      } else {
        primaryNumVal.push(el)
      }
  })




  inputRadioName.forEach((e) => {
    const inputChecked = document.querySelector(`input[name="${e}"]:checked`);
    if (inputChecked) {
      radioValue = inputChecked.value;
      FCradioArr.push(radioValue);
    } else {
      const noVal = "N/A";
      FCradioArr.push(noVal);
    }
  });

  for (let i = 0; i < FCradioArr.length; i += 2) {
    const FCradioCount = FCradioArr[i];
    radioFinalVal.push(FCradioCount);
  }

  const FCdetailedElem = document.getElementById("FCdetailed");

  // const FCtsElem = document.getElementById("FCts");

  if (!FCdetailedElem) {
    console.error("Required Elements not found in the DOM");
    return;
  }

  const FCdetailed = FCdetailedElem.innerText;

  const para = document.querySelector(".sample");

  basicInputsArr.push(textValue,radioFinalVal,primaryNumVal,FCdetailed,para,inputText,inputRadioName, primaryContact)


  return basicInputsArr

  // textValue,radioFinalVal,primaryContactValue,fcDetailed,FCts
};




//functions
function detailedTS() {
  const FCtsElem = document.getElementById("FCts");
  const FCts = FCtsElem.innerText;
  return FCts
}



export const fcFunction = () => {
  const textTS = detailedTS()
  const basicFunction = basicInputs()
  const textValue = basicFunction[0] //textbox value
  const radioFinalVal = basicFunction[1] //radiobutton value
  const primaryContactValue = basicFunction[2]
  const FCdetailed = basicFunction[3]
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

TMPL-FC\r

Name of Caller: ${textValue[2]}\r
Primary Contact Number: ${primaryContactValue[0]}\r
Alternate Contact Name: ${textValue[3]}\r
Alternate Contact Number: ${primaryContactValue[1]}\r
Best time to Call(BTTC): ${textValue[4]}\r
Email Address(if available): ${textValue[5]}\r

Detailed Description of the issue:\r
${FCdetailed}\r

Is there any recent POS updgrade? ${radioFinalVal[2]}
Is there power in the pumps/fuel dispensers? ${radioFinalVal[3]}
How many pumps fuel dispensers are impacted? ${textValue[6]}
is the Fuel Controller available on SMTOOLS? ${radioFinalVal[4]}
**If yes, attempt to do remote reset.\r
**If no, follow the KB instructions.\r
Type of Fuel Controller: ${textValue[7]}
Is the emergency stop button pressed? ${radioFinalVal[5]}
**If yes, follow site safety procedures.\r
Is there any ticket/s opened related to the issue in the past month? ${radioFinalVal[6]}\r
**If yes, note the case number/s and raise to L1.5/L2 for further investigation.\r

Troubleshooting/Resolution:\r
${textTS}

If the issue got fixed, what resolved the issue? ${textValue[8]}
if the issue is not fixed, what is the next step? ${textValue[9]}`);

navigator.clipboard.writeText(text);
};



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


Name of Caller: ${textValue[2]}\r
Primary Contact Number: ${primaryContactValue[0]}\r
Alternate Contact Name: ${textValue[3]}\r
Alternate Contact Number: ${primaryContactValue[1]}\r
Best time to Call(BTTC): ${textValue[4]}\r
Email Address(if available): ${textValue[5]}\r

Detailed Description of the issue:\r
${FCdetailed}\r

Is there a 'Server Offline' alarm on POS? ${radioFinalVal[2]}\r
Have they successfully Closed the Shift on the POS? ${radioFinalVal[3]}\r

**If yes, confirm in RSM>POS Management **If no, follow the KB instructions.\r


Is there any ticket/s opened related to the issue in the past month? ${radioFinalVal[4]}
**If yes, note the case number/s and raise to L1.5/L2 for further investigation.\r

Troubleshooting/Resolution:
${textTS}\r

If the issue got fixed, what resolved the issue?: ${textValue[6]}\r
If the issue is not fixed, what is the next step?: ${textValue[7]}`);
navigator.clipboard.writeText(text);
};



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

TMPL-FuelPrice\r

Name of Caller: ${textValue[2]}\r
Primary Contact Number: ${primaryContactValue[0]}\r
Alternate Contact Name: ${textValue[3]}\r
Alternate Contact Number: ${primaryContactValue[1]}\r
Best time to Call(BTTC): ${textValue[4]}\r
Email Address(if available): ${textValue[5]}\r

Detailed Description of the issue:\r
${FCdetailed}\r

What time did the issue occur: ${textValue[6]}\r
What Fuel Grades are impacted: ${textValue[7]}\r
Can the site change the prices manually through RSM/POS? ${radioFinalVal[2]}
Did they check for BOS offline or server offline message? ${radioFinalVal[3]}
(if this is the case they should be following the server offline KB)

Troubleshooting/Resolution:
${textTS}\r

Is there any ticket/s opened related to the issue in the past month? ${radioFinalVal[4]}

**If yes, note the case number/s and raise to L1.5/L2 for further investigation.

 If the issue got fixed, what resolved the issue?: ${textValue[8]}\r

 If the issue is not fixed, what is the next step? ${textValue[9]}`);
navigator.clipboard.writeText(text);
};




export const siteFacilityIssue = () => {
  const basicFunction = basicInputs()
  const textValue = basicFunction[0]
  const radioFinalVal = basicFunction[1]
  const primaryContactValue = basicFunction[2]
  const FCdetailed = basicFunction[3]
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

TMPL-SiteFac\r

Name of Caller: ${textValue[3]}\r
Primary Contact Number: ${primaryContactValue[0]}\r
Alternate Contact Name: ${textValue[4]}\r
Alternate Contact Number: ${primaryContactValue[1]}\r
Best time to Call(BTTC): ${textValue[5]}\r
Email Address(if available): ${textValue[6]}\r

Detailed Description of the issue:\r
${FCdetailed}\r

If the site is calling in about Site Facilities related issues (air conditioning, fridge, potholes, front door issue, vapor alarm, site safe, price pole, camera system, printer paper roll, alarms, broken pump host, etc.)

Is there any ticket/s opened related to the issue in the past month? ${radioFinalVal[2]}

**If yes, note the case number/s and raise to L1.5/L2 for further investigation.

Assignment Vendor: ${textValue[7]}
`);
navigator.clipboard.writeText(text);
};


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


export const electronicPaymentOutOfOrder = () => {
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

TMPL-EPC\r

Name of Caller: ${textValue[2]}\r
Primary Contact Number: ${primaryContactValue[0]}\r
Alternate Contact Name: ${textValue[3]}\r
Alternate Contact Number: ${primaryContactValue[1]}\r
Best time to Call(BTTC): ${textValue[4]}\r
Email Address(if available): ${textValue[5]}\r

Detailed Description of the issue:\r
${FCdetailed}\r

Are all electronic payments not working? ${radioFinalVal[2]}
**If no, is debit/credit working inside? ${radioFinalVal[3]}
**Is debit/credit working outside? ${radioFinalVal[4]}
Is network connection good? ${radioFinalVal[5]}
If network is down, is Store and Forward Mode (SAF) working? ${radioFinalVal[6]}
Is EPC powered on? ${radioFinalVal[7]}

Is there any ticket/s opened related to the issue in the past month? ${radioFinalVal[8]}

**If yes, note the case number/s and raise to L1.5/L2 for further investigation.

Troubleshooting/resolution:
${textTS}

If the issue got fixed, what resolved the issue?: ${textValue[6]}
If the issue is not fixed, what is the next step?: ${textValue[7]}`);
navigator.clipboard.writeText(text);
};

// - Run connectivity Lan to ping the ICR
// - Upon checking the ICR was pinged successfully, please check the image on case details
// - As per S/A the pump 3 and 4 is not taking any PAP
// - As per checking on sm tools the ICR is online


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



export const posReceiptIssues = () => {
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

TMPL-RcptIssue\r

Name of Caller: ${textValue[2]}\r
Primary Contact Number: ${primaryContactValue[0]}\r
Alternate Contact Name: ${textValue[3]}\r
Alternate Contact Number: ${primaryContactValue[1]}\r
Best time to Call(BTTC): ${textValue[4]}\r
Email Address(if available): ${textValue[5]}\r

Detailed Description of the issue:\r
${FCdetailed}\r

Card type used and last 4 digits (if available): ${textValue[6]}
Transaction Amount/Date/Time:${textValue[7]}
Affected device/s: ${textValue[8]}
Error message/s: ${textValue[9]}
Is the POS printer working? ${textValue[10]}

Is there any ticket/s opened related to the issue in the past month? ${radioFinalVal[2]}
**If yes, note the case number/s and raise to L1.5/L2 for further investigation.

Troubleshooting/resolution:
${textTS}

If the issue got fixed, what resolved the issue? ${textValue[11]}

If the issue is not fixed, what is the next step? ${textValue[12]}`);
navigator.clipboard.writeText(text);
};



export const genericTemplate = () => {
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

TMPL-Generic\r

Name of Caller: ${textValue[2]}\r
Primary Contact Number: ${primaryContactValue[0]}\r
Alternate Contact Name: ${textValue[3]}\r
Alternate Contact Number: ${primaryContactValue[1]}\r
Best time to Call(BTTC): ${textValue[4]}\r
Email Address(if available): ${textValue[5]}\r

Detailed Description of the issue:\r
${FCdetailed}\r

Troubleshooting/resolution:
${textTS}

Is there any ticket/s opened related to the issue in the past month? ${radioFinalVal[2]}\r

**If yes, note the case number/s and raise to L1.5/L2 for further investigation.

If the issue got fixed, what resolved the issue?: ${textValue[6]}

If the issue is not fixed, what is the next step?: ${textValue[7]}

Business Impact Prioritization:
1. Can the site process any transactions in the POS? If no, set case to P2
2. Can the site process any transactions in the Pumps?If no, set case to P2
3. Is the site hard down (unable to transact both in the POS Pumps? If yes, set case to P2`);
navigator.clipboard.writeText(text);
};


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



export const posFreezing = () => {
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
**Service Advisory Description (if Available): ${textValue[2]}\r

TMPL-POSFreeze\r

Name of Caller: ${textValue[3]}\r
Primary Contact Number: ${primaryContactValue[0]}\r
Alternate Contact Name: ${textValue[4]}\r
Alternate Contact Number: ${primaryContactValue[1]}\r
Best time to Call(BTTC): ${textValue[5]}\r
Email Address(if available): ${textValue[6]}\r

${console.log(para)}
Detailed Description of the issue:\r
${FCdetailed}\r

1.How many POS do the site have? ${textValue[7]}

2.Which POS is/are freezing (POS1, POS2, POS3)? ${textValue[8]}

3.Did the site experience this before? When was the last time? ${textValue[9]}

4.At what point is/are POS freezing? ${textValue[10]}

5.Is the POS freezing issue related to payment/EPC4 issue before POS froze? ${textValue[11]}

**If yes, escalate the case to L2 team. 
**If no, follow the KB instructions.
**Check previous cases opened related to the freezing issue and gather what was done to resolve the issue**

Troubleshooting/resolution:
${textTS}


Is there any ticket/s opened related to the issue in the past month? ${radioFinalVal[2]}

**If yes, note the case number/s and raise to L1.5/L2 for further investigation.`);
navigator.clipboard.writeText(text);
};




export const stuckFuelSale = () => {
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

**Service Advisory Description (if Available): ${textValue[2]}

TMPL-FuelSale\r

Name of Caller: ${textValue[3]}\r
Primary Contact Number: ${primaryContactValue[0]}\r
Alternate Contact Name: ${textValue[4]}\r
Alternate Contact Number: ${primaryContactValue[1]}\r
Best time to Call(BTTC): ${textValue[5]}\r
Email Address(if available): ${textValue[6]}\r

Detailed Description of the issue:\r
${FCdetailed}\r

Card type used and last 4 digits(if available): ${primaryContactValue[2]}
Transaction date/time: ${textValue[7]}
Impacted Pump/POS number: ${textValue[8]}
Transaction amount: ${textValue[9]}
Is the stuck fuel sale cashed out?: ${textValue[10]}
Is it a valid drive off?: ${textValue[11]}
**If yes, follow the KB.
is it a fleet transaction?: ${textValue[12]}

Troubleshooting/resolution:
${textTS}

Is there any ticket/s opened related to the issue in the past month? ${radioFinalVal[2]}
**If yes, note the case number/s and raise to L1.5/L2 for further investigation.

If the issue got fixed, what resolved the issue?: ${textValue[13]}
If the issue is not fixed, what is the next step?: ${textValue[14]}`);
navigator.clipboard.writeText(text);
};




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

  const text = (para.innerText =
`Subject: ${textValue[0]}\r
c-Location: ${textValue[1]}\r
**Is C-Location found in Service Advisory Check?: ${radioFinalVal[0]}\r
**If yes, is the Service Advisory related to the issue reported?: ${radioFinalVal[1]}\r
**Service Advisory Description (if Available): ${textValue[2]}

TMPL-PWreset\r

Name of Caller: ${textValue[3]}\r
Primary Contact Number: ${primaryContactValue[0]}\r
Alternate Contact Name: ${textValue[4]}\r
Alternate Contact Number: ${primaryContactValue[1]}\r
Best time to Call(BTTC): ${textValue[5]}\r
Email Address(if available): ${textValue[6]}\r

Detailed Description of the issue:\r
${FCdetailed}\r

Error message encountered (screenshot required):

Is the account locked? ${textValue[7]}
**If yes, unlock the account via Computer Management.

Is the manager trying to change their current password or can they still remember the expired password? ${textValue[8]}
**If yes, guide them with the New Password Requirement

Is the manager requesting for a password reset for forgotten password? ${textValue[9]}

Was the secret code successfully verified? ${textValue[10]}

**If yes, proceed with the password reset process.
**If no, advise them to reach out to their Territory Manager.

Troubleshooting/resolution:
${textTS}

Is there any ticket/s opened related to the issue in the past month? ${radioFinalVal[2]}\r
**If yes, note the case number/s and raise to L1.5/L2 for further investigation.

If the issue got fixed, what resolved the issue?: ${textValue[11]}
If the issue is not fixed, what is the next step?: ${textValue[12]}`);
navigator.clipboard.writeText(text);
};