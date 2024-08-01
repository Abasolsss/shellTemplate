const basicInputs = () => {
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

  basicInputsArr.push(inputText, inputRadio, primaryContact);

  return basicInputsArr;
};

export const fcFunction = () => {
  const FCdetailedElem = document.getElementById("FCdetailed");

  const FCtsElem = document.getElementById("FCts");

  const mandatoryInputs = basicInputs();

  if (!FCdetailedElem || !FCtsElem) {
    console.error("Required Elements not found in the DOM");
    return;
  }

  //need clocation, name, phone #,side advisory

  const FCdetailed = FCdetailedElem.innerHTML;
  const FCts = FCtsElem.innerHTML;

  const inputText = mandatoryInputs[0];

  const inputRadio = mandatoryInputs[1];

  const primaryContact = mandatoryInputs[2];

  const para = document.querySelector(".sample");

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

  inputTextValue.forEach((textVal) => {
    if (textVal === "") {
      const noVal = "N/A";
      textValue.push(noVal);
    } else {
      textValue.push(textVal);
    }
  });

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

  const text = (para.innerHTML = ` 
  Subject: ${textValue[0]}\r
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
  Suggested KBA: All Pumps Down - (Fuel Controller Offline)
`);

  // const replace = text.replace(/\n/g,'<br />');

  navigator.clipboard.writeText(text);
};

export const netConn = () => {};
