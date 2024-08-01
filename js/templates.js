const templateSelect = document.getElementById("templateSelector");

const templateShower = document.getElementById("templateShower");

export const array = [
  {
    templateName: "fcTemplate",
    template: `
    <h1>Fuel Controller Offline</h1>
      <label>
            Subject:
            <input type="text" name="" />
          </label>

          <label>
            C-Location:
            <input type="text" name="" id="" />
          </label>

          <span>
            **Is C-Location found in Service Advisory Check?
            <label>
              Yes
              <input type="radio" name="FCradio1" value="Yes" />
            </label>

            <label>
              No
              <input type="radio" name="FCradio1" value="No" />
            </label>
          </span>

          <span>
            **If yes, is the Service Advisory related to the issue reported?
            <label>
              Yes
              <input type="radio" name="FCradio2" value="Yes" />
            </label>

            <label>
              No
              <input type="radio" name="FCradio2" value="No" />
            </label>
          </span>

          <label for="">
            Name of Caller:
            <input type="text" name="" id="" />
          </label>

          <label for="">
            Primary Contact Number
            <input type="number" name="" id="" />
          </label>

          <label for="">
            Alternate Contact Name:
            <input type="text" name="" id="" />
          </label>

          <label for="">
            Alternate Contact Number
            <input type="number" name="" id="" />
          </label>

          <label for="">
            Best Time to Call(BTTC):
            <input type="text" name="" id="" />
          </label>

          <label for="">
            Email Address(if available)
            <input type="text" name="" id="" />
          </label>

          <label for="exampleFormControlTextarea1" class="form-label"
            >Detailed Description of the issue:</label
          >
          <div
            id="FCdetailed"
            class="container-fluid"
            contenteditable="true"
          ></div>

          <span>
            Is there any recent POS updgrade?
            <label>
              Yes
              <input type="radio" name="FCradio3" value="Yes" />
            </label>

            <label>
              No
              <input type="radio" name="FCradio3" value="No" />
            </label>
          </span>

          <label for="">
            Type of Fuel Controller:
            <input type="text" name="" id="" />
          </label>

          <span>
            is the Fuel Controller available on SMTOOLS?
            <label>
              Yes
              <input type="radio" name="FCradio4" value="Yes" />
            </label>

            <label>
              No
              <input type="radio" name="FCradio4" value="No" />
            </label>
          </span>

          <span>
            is there power in the pump/fuel dispenser?
            <label>
              Yes
              <input type="radio" name="FCradio5" value="Yes" />
            </label>

            <label>
              No
              <input type="radio" name="FCradio5" value="No" />
            </label>
          </span>

          <span>
            is the power cable properly connected
            <label>
              Yes
              <input type="radio" name="FCradio6" value="Yes" />
            </label>

            <label>
              No
              <input type="radio" name="FCradio6" value="No" />
            </label>
          </span>

          <span>
            Emergency Alarm Reset?
            <label>
              Yes
              <input type="radio" name="FCradio7" value="Yes" />
            </label>

            <label>
              No
              <input type="radio" name="FCradio7" value="No" />
            </label>
          </span>

          <label for="">Troubleshooting/Resolution:</label>
          <div id="FCts" class="container-fluid" contenteditable="true"></div>

          <label>
            Service Advisory Description (If Available):
            <input type="text" name="" />
          </label>

          <span>
            Suggested KBA: All Pumps Down - (Fuel Controller Offline)
          </span>

       

          <div class="sample" contenteditable="true"></div>

          <div class="buttons">
            <button type="button" class="btn btn-warning" id="testButton"
        
            >
              Generate
            </button>

            <button
              type="button"
              class="btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              New Issue
            </button>
          </div>
      `,
  },

  {
    templateName: "netConn",
    template: `
     <h1>Network Connectivity</h1>
       <label>
          Subject:
          <input type="text" name="" />
        </label>

        <label>
          C-Location:
          <input type="text" name="" id="" />
        </label>

        <span>
          **Is C-Location found in Service Advisory Check?
          <label>
            Yes
            <input type="radio" name="FCradio1" value="Yes" />
          </label>

          <label>
            No
            <input type="radio" name="FCradio1" value="No" />
          </label>
        </span>

        <span>
          **If yes, is the Service Advisory related to the issue reported?
          <label>
            Yes
            <input type="radio" name="FCradio2" value="Yes" />
          </label>

          <label>
            No
            <input type="radio" name="FCradio2" value="No" />
          </label>
        </span>

        <label for="">
          Name of Caller:
          <input type="text" name="" id="" />
        </label>

        <label for="">
          Primary Contact Number
          <input type="number" name="" id="" />
        </label>

        <label for="">
          Alternate Contact Name:
          <input type="text" name="" id="" />
        </label>

        <label for="">
          Alternate Contact Number
          <input type="number" name="" id="" />
        </label>

        <label for="">
          Best Time to Call(BTTC):
          <input type="text" name="" id="" />
        </label>

        <label for="">
          Email Address(if available)
          <input type="text" name="" id="" />
        </label>

        <label for="exampleFormControlTextarea1" class="form-label"
          >Detailed Description of the issue:</label
        >
        <div
            id="FCdetailed"
            class="container-fluid"
            contenteditable="true"
          ></div>
          <label>
            Subject:
            <input type="text" name="" />
          </label>
          <label>
            **If yes, please note the cutover date from the RTM sites file:
            <input type="text" name="" />
          </label>
          <span>
            Is the site offline on toolset?
            <label>
              Yes
              <input type="radio" name="FCradio2" value="Yes" />
            </label>

            <label>
              No
              <input type="radio" name="FCradio2" value="No" />
            </label>
          </span>

          <span>
            Cybera Status A in red?
            <label>
              Yes
              <input type="radio" name="FCradio2" value="Yes" />
            </label>

            <label>
              No
              <input type="radio" name="FCradio2" value="No" />
            </label>
          </span>

          <span>
            Is the network cable/s properly connected?
            <label>
              Yes
              <input type="radio" name="FCradio2" value="Yes" />
            </label>

            <label>
              No
              <input type="radio" name="FCradio2" value="No" />
            </label>
          </span>


          <span>
            Power cycled the modem.
            <label>
              Yes
              <input type="radio" name="FCradio2" value="Yes" />
            </label>

            <label>
              No
              <input type="radio" name="FCradio2" value="No" />
            </label>
          </span>


          <label>
            Is there any ticket/s opened related to the issue in the past month?
            <input type="text" name="" />
          </label>

          <label for="">**If yes, note the case number/s and raise to L1.5/L2 for further investigation.</label>

          <label for="">Troubleshooting/Resolution:</label>
          <div id="FCts" class="container-fluid" contenteditable="true"></div>
          

          <label>
            Service Advisory Description (If Available):
            <input type="text" name="" />
          </label>


          <div class="sample" contenteditable="true"></div>

          <div class="buttons">
            <button type="button" class="btn btn-warning" id="testButton"
        
            >
              Generate
            </button>

            <button
              type="button"
              class="btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              New Issue
            </button>
      `,
  },
];

//functions
export function templateValueFunct() {
  templateSelect.addEventListener("change", (e) => {
    const values = e.currentTarget.value;
    for (let i = 0; i < array.length; i++) {
      const issueTemplate = array[i].template;
      switch (values) {
        case array[i].templateName:
          templateShower.innerHTML = `
              ${issueTemplate}
            `;
          break;
        default:
          break;
      }
    }
  });
}

export function newIssueFunct() {
  const newIssueButton = document.getElementById("newIssueSelector");
  const newIssueVal = newIssueButton.value;
  for (let i = 0; i < array.length; i++) {
    const issueTemplate = array[i].template;
    switch (newIssueVal) {
      case array[i].templateName:
        templateShower.innerHTML = `
            ${issueTemplate}
          `;
        templateSelect.selectedIndex = i += 1;
        newIssueButton.selectedIndex = 0;
        break;
      default:
        break;
    }
  }
}
