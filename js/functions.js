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

const para = document.querySelector(".sample");

export function fcFunction() {
  const FCdetailed = document.getElementById("FCdetailed").innerHTML;

  const FCts = document.getElementById("FCts").innerHTML;

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

  para.innerHTML = ` 
    Subject: ${textValue[0]}<br/>
   c-Location: ${textValue[1]}<br/>
    **Is C-Location found in Service Advisory Check?: ${radioFinalVal[0]}<br/>
  **If yes, is the Service Advisory related to the issue reported?: ${radioFinalVal[1]} <br/>
  Name of Caller: ${textValue[2]}<br/>
  Primary Contact Number: ${primaryContactValue[0]}<br/>
  Alternate Contact Name: ${textValue[3]}<br/>
  Alternate Contact Number: ${primaryContactValue[1]}<br/>
  Best time to Call(BTTC): ${textValue[4]}<br/>
  Email Address(if available): ${textValue[5]}<br/>
  Detailed Description of the issue:<br/>
  ${FCdetailed}<br/>
  Is there any recent POS upgrade? ${radioFinalVal[2]} <br/>
  Type of Fuel Controller: ${textValue[6]}<br/>
  is the Fuel Controller available on SMTOOLS? ${radioFinalVal[3]}<br/>
  is there power in the pump/fuel dispenser? ${radioFinalVal[4]}<br/>
  is the power cable properly connected? ${radioFinalVal[5]}<br/>
  Emergency Alarm Reset? ${radioFinalVal[6]}<br/>
  Troubleshooting/Resolution:<br/>
  ${FCts}<br/>
  Service Advisory Description (If Available): ${textValue[7]}<br/>
  Suggested KBA: All Pumps Down - (Fuel Controller Offline)
`;
}

export function newIssueFunct() {
  const newIssueButton = document.getElementById("newIssueSelector");

  const newIssueVal = newIssueButton.value;

  switch (newIssueVal) {
    case "netConn":
      templateShower.innerHTML = `

                <h1>Hello maderfuckers!</h1>
            
            `;
      break;

    default:
      break;
  }
}
