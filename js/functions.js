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
Name of Caller: ${textValue[2]}\r
Primary Contact Number: ${primaryContactValue[0]}\r
Alternate Contact Name: ${textValue[3]}\r
Alternate Contact Number: ${primaryContactValue[1]}\r
Best time to Call(BTTC): ${textValue[4]}\r
Email Address(if available): ${textValue[5]}\r
Detailed Description of the issue:\r
${FCdetailed}\r
Is there any recent POS upgrade? ${radioFinalVal[2]} \r
Type of Fuel Controller: ${textValue[6]}\r
is the Fuel Controller available on SMTOOLS? ${radioFinalVal[3]}\r
is there power in the pump/fuel dispenser? ${radioFinalVal[4]}\r
is the power cable properly connected? ${radioFinalVal[5]}\r
Emergency Alarm Reset? ${radioFinalVal[6]}\r
Troubleshooting/Resolution:\r
${textTS}
Service Advisory Description (If Available): ${textValue[7]}\r
Suggested KBA: All Pumps Down - (Fuel Controller Offline`);

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
Name of Caller: ${textValue[2]}\r
Primary Contact Number: ${primaryContactValue[0]}\r
Alternate Contact Name: ${textValue[3]}\r
Alternate Contact Number: ${primaryContactValue[1]}\r
Best time to Call(BTTC): ${textValue[4]}\r
Email Address(if available): ${textValue[5]}\r
Detailed Description of the issue:\r
${FCdetailed}\r
**If yes, please note the cutover date from the RTM sites file: ${textValue[6]}\r
is the site offline on toolset? ${radioFinalVal[2]}\r
Cybera Status A in red? ${radioFinalVal[3]}\r
Is the network cable/s properly connected? ${radioFinalVal[4]}\r
Power cycled the modem? ${radioFinalVal[5]}\r
is there any ticket/s opened related to the issue in the past month? ${textValue[7]}\r
Troubleshooting/Resolution:
${textTS}
Service Advisory Description(If Available):${textValue[8]}`);
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
Is there any ticket/s opened related to the issue in the past month?\r
**If yes, note the case number/s and raise to L1.5/L2 for further investigation.\r

Troubleshooting/Resolution:
${textTS}\r

Resolution (what fixed the issue?): ${textValue[6]}\r
Service Advisory Description (if Available): ${textValue[7]}

Suggested KBAs:
End of Day (EOD) or End of Shift (EOS) Do Not Print
POS Report Missing OR No Data To Report
EOD Device total issue
End Of Day (EOD) Failure Alert on the POS or Batch In Progress`);
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
Resolution (what fixed the issue?): ${textValue[8]}\r
Service Advisory Description (if Available): ${textValue[9]}`);
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
Name of Caller: ${textValue[2]}\r
Primary Contact Number: ${primaryContactValue[0]}\r
Alternate Contact Name: ${textValue[3]}\r
Alternate Contact Number: ${primaryContactValue[1]}\r
Best time to Call(BTTC): ${textValue[4]}\r
Email Address(if available): ${textValue[5]}\r
Detailed Description of the issue:\r
${FCdetailed}\r
If the site is calling in about Site Facilities related issues (air conditioning, fridge, potholes, front door issue, vapor alarm, site safe, price pole, camera system, printer paper roll, alarms, broken pump host, etc.)

Is there any ticket/s opened related to the issue in the past month? **If yes, note the case number/s and raise to L1.5/L2 for further investigation.

Assignment Vendor: ${textValue[6]}

Suggested KBA:
Security Camera System
Vapour Alarm
Site Safe
Price Pole (An Outside Price Sign)
Site Facility Issues`);
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

Is there any ticket/s opened related to the issue in the past month?

**If yes, note the case number/s and raise to L1.5/L2 for further investigation.

Troubleshooting/resolution:
${textTS}

Service Advisory Description (if Available):${textValue[10]}

Suggested KBA:
Shell - POS Alarms and Notifications`);
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

Is there any ticket/s opened related to the issue in the past month? **If yes, note the case number/s and raise to L1.5/L2 for further investigation.

Resolution (what fixed the issue?): ${textValue[6]}
Troubleshooting/resolution:
${textTS}
Service Advisory Description (if Available):${textValue[7]}
Suggested KBA:
Electronic Payment Out of Order- EPC4`);
navigator.clipboard.writeText(text);
};


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
Name of Caller: ${textValue[2]}\r
Primary Contact Number: ${primaryContactValue[0]}\r
Alternate Contact Name: ${textValue[3]}\r
Alternate Contact Number: ${primaryContactValue[1]}\r
Best time to Call(BTTC): ${textValue[4]}\r
Email Address(if available): ${textValue[5]}\r
Detailed Description of the issue:\r
${FCdetailed}\r
Is this a POS or PDI scanner? ${textValue[6]}
**If POS, check the following:
Are all items not scanning? ${radioFinalVal[2]}
How many scanners are impacted? ${textValue[7]}
Which POS is the scanner connected? ${textValue[8]}
Did you reprogram the scanner? ${textValue[9]}


*If PDI, check the KB article for specific instructions.

Are there any related tickets opened for the same device in the past month? **If yes, note the case number/s and raise to L2 for possible replacement

Model/Device Type: ${textValue[10]}
Error Message/s (if applicable) ${textValue[11]}
Have you tried programming the scanner? ${textValue[12]}
Troubleshooting/resolution:
${textTS}
Resolution (what fixed the issue?): ${textValue[13]}
Service Advisory Description (if Available):${textValue[14]}
Suggested KBA:
POS Scanner Unable to Scan (Xenon 1902)
PDI Handheld Scanner not Working`);
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

Is there any ticket/s opened related to the issue in the past month?
**If yes, note the case number/s and raise to L1.5/L2 for further investigation.

Troubleshooting/resolution:
${textTS}

Resolution (what fixed the issue?): ${textValue[13]}
Service Advisory Description (if Available):${textValue[14]}
Suggested KBA:
Receipt Issues and Inquiries for POS or Pumps
POS Receipt Printer Not Functioning
Safe Drop Receipt Not Printing on POS
Shell - RLM SCAN Receipt printer issue`);
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
Resolution (what fixed the issue?): ${textValue[6]}
Business Impact Prioritization:
1. Can the site process any transactions in the POS? If no, set case to P2
2. Can the site process any transactions in the Pumps?If no, set case to P2
3. Is the site hard down (unable to transact both in the POS Pumps? If yes, set case to P2
Service Advisory Description (if Available):${textValue[7]}`);
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
Name of Caller: ${textValue[2]}\r
Primary Contact Number: ${primaryContactValue[0]}\r
Detailed Description of the issue:\r
${FCdetailed}\r
Are you able to successfully warm transferred the tech to the site? ${radioFinalVal[2]}
**If no, state the reason why:
${textTS}
Service Advisory Description (if Available):${textValue[6]}
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
Name of Caller: ${textValue[2]}\r
Primary Contact Number: ${primaryContactValue[0]}\r
Alternate Contact Name: ${textValue[3]}\r
Alternate Contact Number: ${primaryContactValue[1]}\r
Best time to Call(BTTC): ${textValue[4]}\r
Email Address(if available): ${textValue[5]}\r
Detailed Description of the issue:\r
${FCdetailed}\r
How many pump(s) is/are affected? ${textValue[6]}
Is Debit/Credit working inside? ${radioFinalVal[2]}
Is Debit/Credit working on other pumps? ${radioFinalVal[3]}
what is the error message on the ICR? ${textValue[7]}
Able to ping the ICR? ${textValue[8]}
Reviewed transaction journal for issue verification? ${textValue[9]}
Troubleshooting/resolution:
${textTS}
Service Advisory Description (if Available):${textValue[10]}
Suggested KBA:
PAP not working at specific ICR's - Gen 5 Card Reader`);
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
Are there any related tickets opened for the same pump/s in the past month? **If yes, note the case number/s for reference.
Troubleshooting/resolution:
${textTS}
Service Advisory Description (if Available):${textValue[7]}
Suggested KBA:
PAP not working at specific ICR's - Gen 5 Card Reader`);
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
Name of Caller: ${textValue[2]}\r
Primary Contact Number: ${primaryContactValue[0]}\r
Alternate Contact Name: ${textValue[3]}\r
Alternate Contact Number: ${primaryContactValue[1]}\r
Best time to Call(BTTC): ${textValue[4]}\r
Email Address(if available): ${textValue[5]}\r
Detailed Description of the issue:\r
${FCdetailed}\r
1.How many POS do the site have? ${textValue[6]}
2.Which POS is/are freezing (POS1, POS2, POS3)? ${textValue[7]}
3.Did the site experience this before? When was the last time? ${textValue[8]}
4.At what point is/are POS freezing? ${textValue[9]}
5.Is the POS freezing issue related to payment/EPC4 issue before POS froze? ${textValue[10]}
**If yes, escalate the case to L2 team. **If no, follow the KB instructions.
**Check the following from Salesforce:
1. Previous cases opened related to the freezing issue.
2. Gather what was done previous to resolve the issue.
Troubleshooting/resolution:
${textTS}
Service Advisory Description (if Available):${textValue[11]}
Suggested KBA:
POS Freezing (One or Multiple)`);
navigator.clipboard.writeText(text);
};