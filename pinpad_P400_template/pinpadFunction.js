
export const pinpadFn = () => {

 let arr = []

// const bgisTS = document.getElementById("bgisTS")

const pinpadCopyPaste = document.querySelector(".pinpadCopypaste")

const pinpadBody = document.getElementById("pinpadBody")

const inputSelect = new Set(Array.from(pinpadBody.querySelectorAll(`input[type="text"]`)))

const inputSelectValue = new Set(Array.from(inputSelect).map((input) => input.value))

inputSelectValue.forEach((el) => {
    arr.push(el)
})


console.log(arr)

const text = (pinpadCopyPaste.innerText =
`


Hello P400 Team,

We have received a call for a P400 issue with the following details:

• C-Location: ${arr[0]}
• Serial number: ${arr[1]}
• Description of the issue: Display stuck on ${arr[2]}
• Date and time with time-zone(CST or EST or MT) when on the site called the help desk: ${arr[3]}
• Time the issue started: ${arr[4]}
• What was the site doing before the issue?(Middle of transaction, pinpad idle, etc.):
• Time pinpad was rebooted: ${arr[5]}
• What was seen on the P400 screen?(black,loading screen,etc.): ${arr[6]}
• Service Cloud Ticket #: ${arr[7]}

Thanks,

Shell Canada Service Desk - L1


`);
navigator.clipboard.writeText(text);

  Swal.fire({
          title: "Nice one!",
          text: "P400 team email template copied!",
          icon: "success",
        });

};

