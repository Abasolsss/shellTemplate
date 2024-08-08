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

  const FCtsElem = document.getElementById("FCts");

  if (!FCdetailedElem || !FCtsElem) {
    console.error("Required Elements not found in the DOM");
    return;
  }

  const FCdetailed = FCdetailedElem.innerText;
  const FCts = FCtsElem.innerText;
  const para = document.querySelector(".sample");

  basicInputsArr.push(textValue,radioFinalVal,primaryNumVal,FCdetailed,FCts,para,inputText,inputRadioName, primaryContact)


  return basicInputsArr

  // textValue,radioFinalVal,primaryContactValue,fcDetailed,FCts
};



//functions

export const fcFunction = () => {

  const basicFunction = basicInputs()
  const textValue = basicFunction[0] //textbox value
  const radioFinalVal = basicFunction[1] //radiobutton value
  const primaryContactValue = basicFunction[2]
  const FCdetailed = basicFunction[3]
  const FCts = basicFunction[4]
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
${FCts}
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
  const FCts = basicFunction[4]
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
${FCts}
Service Advisory Description(If Available):${textValue[8]}`);
navigator.clipboard.writeText(text);
};



export const eodFailedOnPos = () => {
  const basicFunction = basicInputs()
  const textValue = basicFunction[0]
  const radioFinalVal = basicFunction[1]
  const primaryContactValue = basicFunction[2]
  const FCdetailed = basicFunction[3]
  const FCts = basicFunction[4]
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
${FCts}\r

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
  const FCts = basicFunction[4]
  const para = basicFunction[5]



  console.log(textValue[8])

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
Troubleshooting (steps done to resolve the issue):
${FCts}\r
Resolution (what fixed the issue?): ${textValue[8]}\r
Service Advisory Description (if Available): ${textValue[9]}`);
navigator.clipboard.writeText(text);
};
