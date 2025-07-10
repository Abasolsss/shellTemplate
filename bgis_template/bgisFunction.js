
export const BGISfn = () => {

 let arr = []

const bgisTS = document.getElementById("bgisTS")

const bgisCopyPaste = document.querySelector(".bgisCopyPaste")

const BGISbody = document.getElementById("BGISbody")

const inputSelect = new Set(Array.from(BGISbody.querySelectorAll(`input[type="text"]`)))

const inputSelectValue = new Set(Array.from(inputSelect).map((input) => input.value))

inputSelectValue.forEach((el) => {
    arr.push(el)
})


const text = (bgisCopyPaste.innerText =
`
SHELL-ALERT \\ ${arr[0]} \\  ${arr[1]} \\  ${arr[2]} \\ ${arr[3]}

Hello BGIS,

We are requesting for your assistance with this issue, please see details below.

Site ID: ${arr[0]}
SC case #: ${arr[1]}
Equipment affected: ${arr[2]}
Issue: ${arr[3]}

Troubleshooting:
${bgisTS.value}






Regards,


Shell IT Service Desk
SCAN-IT-Servicerequests@shell.com


`);
navigator.clipboard.writeText(text);

  Swal.fire({
          title: "Nice one!",
          text: "BGIS template copied!",
          icon: "success",
        });

};


