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

  console.log(para)
  basicInputsArr.push(textValue,radioFinalVal,primaryNumVal,FCdetailed,para,inputText,inputRadioName, primaryContact)


  return basicInputsArr

  // textValue,radioFinalVal,primaryContactValue,fcDetailed,FCts
};




//functions
export function detailedTS() {
  const FCtsElem = document.getElementById("FCts");
  const FCts = FCtsElem.innerText;
  return FCts
}







