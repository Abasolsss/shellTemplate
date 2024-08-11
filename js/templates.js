
// import { fcFunction, netConn, basicInputs } from "./functions.js";

import { basicInputs } from "./functions.js";

const removeItems = () => {
          localStorage.removeItem("cLocation")
          localStorage.removeItem("siteAd1")
          localStorage.removeItem("siteAd2")
          localStorage.removeItem("callerName")
          localStorage.removeItem("primeNumber")
          localStorage.removeItem("altNumber")
          localStorage.removeItem("bestTime")
          localStorage.removeItem("emailAd")
          localStorage.removeItem("altName")
}



const templateSelect = document.getElementById("templateSelector");

const templateShower = document.getElementById("templateShower");

const newIssueSelect = document.getElementById("newIssueSelector")

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
              <input type="radio" name="SAradio1" value="Yes" />
            </label>

            <label>
              No
              <input type="radio" name="SAradio1" value="No" />
            </label>
          </span>

          <span>
            **If yes, is the Service Advisory related to the issue reported?
            <label>
              Yes
              <input type="radio" name="SAradio2" value="Yes" />
            </label>

            <label>
              No
              <input type="radio" name="SAradio2" value="No" />
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
              <input type="radio" name="SAradio3" value="Yes" />
            </label>

            <label>
              No
              <input type="radio" name="SAradio3" value="No" />
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
              <input type="radio" name="SAradio4" value="Yes" />
            </label>

            <label>
              No
              <input type="radio" name="SAradio4" value="No" />
            </label>
          </span>

          <span>
            is there power in the pump/fuel dispenser?
            <label>
              Yes
              <input type="radio" name="SAradio5" value="Yes" />
            </label>

            <label>
              No
              <input type="radio" name="SAradio5" value="No" />
            </label>
          </span>

          <span>
            is the power cable properly connected
            <label>
              Yes
              <input type="radio" name="SAradio6" value="Yes" />
            </label>

            <label>
              No
              <input type="radio" name="SAradio6" value="No" />
            </label>
          </span>

          <span>
            Emergency Alarm Reset?
            <label>
              Yes
              <input type="radio" name="SAradio7" value="Yes" />
            </label>

            <label>
              No
              <input type="radio" name="SAradio7" value="No" />
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
            <input type="radio" name="SAradio1" value="Yes" />
          </label>

          <label>
            No
            <input type="radio" name="SAradio1" value="No" />
          </label>
        </span>

        <span>
          **If yes, is the Service Advisory related to the issue reported?
          <label>
            Yes
            <input type="radio" name="SAradio2" value="Yes" />
          </label>

          <label>
            No
            <input type="radio" name="SAradio2" value="No" />
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
            **If yes, please note the cutover date from the RTM sites file:
            <input type="text" name="" />
          </label>
          <span>
            Is the site offline on toolset?
            <label>
              Yes
              <input type="radio" name="SAradio3" value="Yes" />
            </label>

            <label>
              No
              <input type="radio" name="SAradio3" value="No" />
            </label>
          </span>

          <span>
            Cybera Status A in red?
            <label>
              Yes
              <input type="radio" name="SAradio4" value="Yes" />
            </label>

            <label>
              No
              <input type="radio" name="SAradio4" value="No" />
            </label>
          </span>

          <span>
            Is the network cable/s properly connected?
            <label>
              Yes
              <input type="radio" name="SAradio5" value="Yes" />
            </label>

            <label>
              No
              <input type="radio" name="SAradio5" value="No" />
            </label>
          </span>


          <span>
            Power cycled the modem.
            <label>
              Yes
              <input type="radio" name="SAradio6" value="Yes" />
            </label>

            <label>
              No
              <input type="radio" name="SAradio6" value="No" />
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

  {
    templateName: "EODFailedPOS",
    template: `
    <h1>EOD Failed on POS</h1>
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
           <input type="radio" name="SAradio1" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio1" value="No" />
         </label>
       </span>

       <span>
         **If yes, is the Service Advisory related to the issue reported?
         <label>
           Yes
           <input type="radio" name="SAradio2" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio2" value="No" />
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
         Is there a 'Server Offline' alarm on POS?
         <label>
           Yes
           <input type="radio" name="SAradio3" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio3" value="No" />
         </label>
       </span>

         <span>
         Have they successfully Closed the Shift on the POS?
         <label>
           Yes
           <input type="radio" name="SAradio4" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio4" value="No" />
         </label>
       </span>

      <p>
        **If yes, confirm in RSM>POS Management
        **If no, follow the KB instructions.
      </p>

      <p>
        Is there any ticket/s opened related to the issue in the past month?
      </p>

      <p>
        **If yes, note the case number/s and raise to L1.5/L2 for further investigation.
      </p>

       <label for="">Troubleshooting/Resolution:</label>
          <div id="FCts" class="container-fluid" contenteditable="true"></div>

          <label for="">
            Resolution (what fixed the issue?):
            <input type="text" name="" id="" />
          </label>



           <label for="">
            ﻿Service Advisory Description (if Available):
            <input type="text" name="" id="" />
          </label>

      
      <p>
        Suggested KBAs:<br/>
        End of Day (EOD) or End of Shift (EOS) Do Not Print<br/>
        POS Report Missing OR No Data To Report<br/>
        EOD Device total issue<br/>
        End Of Day (EOD) Failure Alert on the POS or Batch In Progress<br/>
    </p>
  

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

  {
    templateName: "fuelPriceChange",
    template: `
    <h1>Fuel Price Change</h1>
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
           <input type="radio" name="SAradio1" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio1" value="No" />
         </label>
       </span>

       <span>
         **If yes, is the Service Advisory related to the issue reported?
         <label>
           Yes
           <input type="radio" name="SAradio2" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio2" value="No" />
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

      <label for="">
       What time did the issue occur:
         <input type="text" name="" id="" />
       </label>

      <label for="">
      What Fuel Grades are impacted:
         <input type="text" name="" id="" />
       </label>

    <span>
         Can the site change the prices manually through RSM/POS?
         <label>
           Yes
           <input type="radio" name="SAradio3" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio3" value="No" />
         </label>
       </span>

        <span>
        Did they check for BOS offline or server offline message?
         <label>
           Yes
           <input type="radio" name="SAradio4" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio4" value="No" />
         </label>
       </span>

       <p>
       (if this is the case they should be following the server offline KB)
       </p>


        <label for="">Troubleshooting/Resolution:</label>
          <div id="FCts" class="container-fluid" contenteditable="true"></div>

          
           <label for="">
           Resolution (what fixed the issue?):
            <input type="text" name="" id="" />
          </label>
          
    <label for="">
      Service Advisory Description (if Available):
         <input type="text" name="" id="" />
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
      </div>
    `
  },

  {
    templateName: "siteFacilityIssue",
    template: `
    <h1>Site Facility Issue</h1>
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
           <input type="radio" name="SAradio1" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio1" value="No" />
         </label>
       </span>

       <span>
         **If yes, is the Service Advisory related to the issue reported?
         <label>
           Yes
           <input type="radio" name="SAradio2" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio2" value="No" />
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


         <p>
          If the site is calling in about Site Facilities related issues (air conditioning, fridge, potholes, front door issue, vapor alarm, site safe, price pole, camera system, printer paper roll, alarms, broken pump host, etc.)
         </p>

         <p>
          Is there any ticket/s opened related to the issue in the past month?

          **If yes, note the case number/s and raise to L1.5/L2 for further investigation.
        </p>

        <label>
            Assignment Vendor:
            <input type="text" name="" id="" />
        </label>

        <span style="font-weight:bold;">Suggested KBA:</span>
     
          <p>Security Camera System</p>
          <p>Vapour Alarm</p>
          <p>Site Safe</p>
          <p>Price Pole (An Outside Price Sign)</p>
          <p>Site Facility Issues</p>
        
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
    `
  },

  {
    templateName: "posErrorMessages",
    template: `
      <h1>POS Error Message</h1>
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
           <input type="radio" name="SAradio1" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio1" value="No" />
         </label>
       </span>

       <span>
         **If yes, is the Service Advisory related to the issue reported?
         <label>
           Yes
           <input type="radio" name="SAradio2" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio2" value="No" />
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

      <label for="">
         How many POS terminal does the site have?
         <input type="text" name="" id="" />
       </label>

       <label for="">
         Which POS terminal is impacted?
         <input type="text" name="" id="" />
       </label>


        <label for="">
          Exact error message/s:
         <input type="text" name="" id="" placeholder"Attach a screenshot of the error"/>
       </label>


        <label for="">
          transaction details(if applicable):
         <input type="text" name="" id=""/>
       </label>

       <p>
        Is there any ticket/s opened related to the issue in the past month?
        **If yes, note the case number/s and raise to L1.5/L2 for further investigation.
       </p>


        <label for="">Troubleshooting/Resolution:</label>
          <div id="FCts" class="container-fluid" contenteditable="true"></div>

        <div class="sample" contenteditable="true"></div>

       <label for="">
        Service Advisory Description (If Available):
         <input type="text" name="" id="" />
       </label>


        <span style="font-weight: bold;">Suggested KBA:</span>
        <p>Shell - POS Alarms and Notifications</p>

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
    `
  },


  {
    templateName: "electronicPaymentOutOfOrder",
    template: `
      <h1>Electronic Payment Out OF Order</h1>
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
           <input type="radio" name="SAradio1" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio1" value="No" />
         </label>
       </span>

       <span>
         **If yes, is the Service Advisory related to the issue reported?
         <label>
           Yes
           <input type="radio" name="SAradio2" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio2" value="No" />
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
            Are all electronic payments not working?
         <label>
           Yes
           <input type="radio" name="SAradio3" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio3" value="No" />
         </label>
       </span>

         <span>
           **If no, is debit/credit working inside?
         <label>
           Yes
           <input type="radio" name="SAradio4" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio4" value="No" />
         </label>
       </span>


         <span>
          **Is debit/credit working outside?
         <label>
           Yes
           <input type="radio" name="SAradio5" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio5" value="No" />
         </label>
       </span>

        <span>
          Is network connection good?
         <label>
           Yes
           <input type="radio" name="SAradio6" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio6" value="No" />
         </label>
       </span>



       <span>
         If network is down, is Store and Forward Mode (SAF) working? 
         <label>
           Yes
           <input type="radio" name="SAradio7" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio7" value="No" />
         </label>
       </span>

       <span>
        Is EPC powered on?
         <label>
           Yes
           <input type="radio" name="SAradio8" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio8" value="No" />
         </label>
       </span>

       <p>
        Is there any ticket/s opened related to the issue in the past month?

        **If yes, note the case number/s and raise to L1.5/L2 for further investigation.
       </p>
       


        <label for="">Troubleshooting/Resolution:</label>
          <div id="FCts" class="container-fluid" contenteditable="true"></div>

        <div class="sample" contenteditable="true"></div>
        
      <label for="">
        Resolution (what fixed the issue?):
         <input type="text" name="" id="" />
       </label>

      <label for="">
        Service Advisory Description (If Available):
         <input type="text" name="" id="" />
       </label>

        <span style="font-weight: bold;">Suggested KBA:</span>
        <p>Electronic Payment Out of Order- EPC4</p>

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
    `
  },

  {
    templateName: "scannerNotWorking",
    template: `
       <h1>Scanner not working</h1>
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
           <input type="radio" name="SAradio1" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio1" value="No" />
         </label>
       </span>

       <span>
         **If yes, is the Service Advisory related to the issue reported?
         <label>
           Yes
           <input type="radio" name="SAradio2" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio2" value="No" />
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

       <label for="">
         Is this a POS or PDI scanner?
         <input type="text" name="" id="" />
       </label>

       **If POS, check the following:<br/>

      <span>
         Are all items not scanning?
         <label>
           Yes
           <input type="radio" name="SAradio3" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio3" value="No" />
         </label>
       </span>
      
       <label for="">
         How many scanners are impacted?
         <input type="text" name="" id="" />
       </label>

        <label for="">
         Which POS is the scanner connected?
         <input type="text" name="" id="" />
       </label>

      <label for="">
         Did you reprogram the scanner?
         <input type="text" name="" id="" />
       </label>

       <p>*If PDI, check the KB article for specific instructions.</p>

       <p>Are there any related tickets opened for the same device in the past month?
       **If yes, note the case number/s and raise to L2 for possible replacement</p>

       <label for="">
          Model/Device Type:
         <input type="text" name="" id="" />
       </label>

       <label for="">
          Error Message/s (if applicable)
         <input type="text" name="" id="" />
       </label>

       <label for="">
          Have you tried programming the scanner?
         <input type="text" name="" id="" />
       </label>


        <label for="">Troubleshooting/Resolution:</label>
          <div id="FCts" class="container-fluid" contenteditable="true"></div>


       <label for="">
          Resolution (what fixed the issue?):
         <input type="text" name="" id="" />
       </label>

        <div class="sample" contenteditable="true"></div>

         <label for="">
        Service Advisory Description (If Available):
         <input type="text" name="" id="" />
       </label>

        <span style="font-weight: bold;">Suggested KBA:</span>
        <p>POS Scanner Unable to Scan (Xenon 1902)</p>
        <p>PDI Handheld Scanner not Working</p>
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
    
    `
  },

  {
    templateName: "posReceiptIssues",
    template: `
       <h1>POS Receipt Issues</h1>
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
           <input type="radio" name="SAradio1" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio1" value="No" />
         </label>
       </span>

       <span>
         **If yes, is the Service Advisory related to the issue reported?
         <label>
           Yes
           <input type="radio" name="SAradio2" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio2" value="No" />
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


      <label for="">
         Card type used and last 4 digits (if available):
         <input type="text" name="" id="" />
       </label>

       <label for="">
         Transaction Amount/Date/Time:
         <input type="text" name="" id="" />
       </label>

       <label for="">
         Affected device/s:
         <input type="text" name="" id="" placeholder="POS or Pump" />
       </label>

       <label for="">
         Error message/s:
         <input type="text" name="" id=""/>
       </label>

       <label for="">
         Is the POS printer working?
         <input type="text" name="" id=""/>
       </label>

      <p>
        Is there any ticket/s opened related to the issue in the past month?

        **If yes, note the case number/s and raise to L1.5/L2 for further investigation.
      </p>

        <label for="">Troubleshooting/Resolution:</label>
          <div id="FCts" class="container-fluid" contenteditable="true"></div>

      <label for="">
         Resolution (what fixed the issue?):
         <input type="text" name="" id=""/>
       </label>

        <div class="sample" contenteditable="true"></div>

     

      <label for="">
        Service Advisory Description (If Available):
         <input type="text" name="" id="" />
      </label>

   <span style="font-weight: bold;">Suggested KBA:</span>
        <p>Receipt Issues and Inquiries for POS or Pumps</p>
        <p>POS Receipt Printer Not Functioning</p>
        <p>Safe Drop Receipt Not Printing on POS</p>
        <p>Shell - RLM SCAN Receipt printer issue</p>

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
    `
  },

  {
    templateName: "genericTemplate",
    template: `
       <h1>Generic Template</h1>
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
           <input type="radio" name="SAradio1" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio1" value="No" />
         </label>
       </span>

       <span>
         **If yes, is the Service Advisory related to the issue reported?
         <label>
           Yes
           <input type="radio" name="SAradio2" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio2" value="No" />
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


        <label for="">Troubleshooting/Resolution:</label>
          <div id="FCts" class="container-fluid" contenteditable="true"></div>

       <label for="">
        Resolution:
         <input type="text" name="" id="" />
       </label>
    
       Business Impact Prioritization:<br/>
      <p>1. Can the site process any transactions in the POS? If no, set case to P2</p>
      <p>2. Can the site process any transactions in the Pumps?If no, set case to P2</p>
      <p>3.Is the site hard down (unable to transact both in the POS Pumps? If yes, set case to P2</p>

        <div class="sample" contenteditable="true"></div>
      <label for="">
        Service Advisory Description (If Available):
         <input type="text" name="" id="" />
       </label>

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
    `
  },

  {
    templateName: "GoCoTS",
    template: `
       <h3>GoCo Tech Calling for L1 Troubleshooting with Site</h3>
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
           <input type="radio" name="SAradio1" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio1" value="No" />
         </label>
       </span>

       <span>
         **If yes, is the Service Advisory related to the issue reported?
         <label>
           Yes
           <input type="radio" name="SAradio2" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio2" value="No" />
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

       <label for="exampleFormControlTextarea1" class="form-label"
         >Issue with the site network:</label
       >
       <div
           id="FCdetailed"
           class="container-fluid"
           contenteditable="true"
         ></div>


         <span>
         Are you able to successfully warm transferred the tech to the site?
         <label>
           Yes
           <input type="radio" name="SAradio3" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio3" value="No" />
         </label>
       </span>

        <label for="">**If no, state the reason why:</label>
          <div id="FCts" class="container-fluid" contenteditable="true"></div>

        <div class="sample" contenteditable="true"></div>

       

         <label for="">
        Service Advisory Description (If Available):
         <input type="text" name="" id="" />
       </label>

          <span style="font-weight: bold;">Suggested KBA:</span>

        <p>GoCo Tech Calling for L1 Troubleshooting with Site</p>

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
    `
  },

  {
    templateName: "papNotWorking",
    template: `
       <h1>Pay at Pump not working</h1>
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
           <input type="radio" name="SAradio1" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio1" value="No" />
         </label>
       </span>

       <span>
         **If yes, is the Service Advisory related to the issue reported?
         <label>
           Yes
           <input type="radio" name="SAradio2" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio2" value="No" />
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


      <label for="">
         How many pump(s) is/are affected?
         <input type="text" name="" id="" />
       </label>

       <span>
        Is Debit/Credit working inside?
         <label>
           Yes
           <input type="radio" name="SAradio3" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio3" value="No" />
         </label>
       </span>

       <span>
       Is Debit/Credit working on other pumps?
         <label>
           Yes
           <input type="radio" name="SAradio4" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio4" value="No" />
         </label>
       </span>

      <label for="">
         what is the error message on the ICR?
         <input type="text" name="" id="" />
       </label>

      <label for="">
        Able to ping the ICR?
         <input type="text" name="" id="" />
       </label>

       <label for="">
         Reviewed transaction journal for issue verification?
         <input type="text" name="" id="" />
       </label>
       
        <p>
          Is there any ticket/s opened related to the issue in the past month?
          **If yes, note the case number/s and raise to L1.5/L2 for further investigation.
        </p>


        <label for="">Troubleshooting/Resolution:</label>
          <div id="FCts" class="container-fluid" contenteditable="true"></div>

        <div class="sample" contenteditable="true"></div>

    

         <label for="">
        Service Advisory Description (If Available):
         <input type="text" name="" id="" />
       </label>

    <span style="font-weight: bold;">Suggested KBA:</span>
        <p>PAP not working at specific ICR's - Gen 5 Card Reader</p>

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
    `
  }, 

  {
    templateName: "pumpsDown",
    template: `
     <h1>Pumps Down</h1>
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
           <input type="radio" name="SAradio1" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio1" value="No" />
         </label>
       </span>

       <span>
         **If yes, is the Service Advisory related to the issue reported?
         <label>
           Yes
           <input type="radio" name="SAradio2" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio2" value="No" />
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

      <label for="">
        How many pump(s) is/are affected?
         <input type="text" name="" id="" />
       </label>

      <ul>
        <li> If DO/GBW: Contact their Pump Maintenance Contractor.</li>
         <li>If MBA/CMA/RBA site, call BGIS at 1-866-449-2355.</li>
      <p>
        Are there any related tickets opened for the same pump/s in the past month?
        **If yes, note the case number/s for reference.
      </p>


        <label for="">Troubleshooting/Resolution:</label>
          <div id="FCts" class="container-fluid" contenteditable="true"></div>

        <div class="sample" contenteditable="true"></div>

    
      <label for="">
        Service Advisory Description (If Available):
         <input type="text" name="" id="" />
       </label><br/>
        <span style="font-weight: bold;">Suggested KBA:</span>
        <p>Pump Offline (One or Multiple)</p>
        <p>Pump Issue - Tech on Site</p>

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
    
    `
  },

  {
    templateName: "posFreezing",
    template: `
       <h1>POS Freezing</h1>
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
           <input type="radio" name="SAradio1" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio1" value="No" />
         </label>
       </span>

       <span>
         **If yes, is the Service Advisory related to the issue reported?
         <label>
           Yes
           <input type="radio" name="SAradio2" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio2" value="No" />
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

         <span style="font-weight: bold;">Gather the following:</span>
         
          <span class="info">
            <label>
                1. How many POS do the site have?
                <input type="text" name="" id="" />
            </label>


            <label>
               2. Which POS is/are freezing (POS1, POS2, POS3)
                <input type="text" name="" id="" />
            </label>


             <label>
              3. Did the site experience this before? When was the last time?
                <input type="text" name="" id="" />
            </label>


            <label>
              4. At what point is/are POS freezing?
                <input type="text" name="" id="" />
            </label>

            <label>
             5. Is the POS freezing issue related to payment/EPC4 issue before POS froze?
                <input type="text" name="" id="" />
            </label>
    
          </span>

          <span style="font-weight: bold;">
            **If yes, escalate the case to L2 team.
            **If no, follow the KB instructions.
          </span>

          <p>**Check the following from Salesforce:</p>
          <p>1. Previous cases opened related to the freezing issue.</p>
          <p>2. Gather what was done previous to resolve the issue.</p>

        <label for="">Troubleshooting/Resolution:</label>
          <div id="FCts" class="container-fluid" contenteditable="true"></div>

        <div class="sample" contenteditable="true"></div>

    

         <label for="">
        Service Advisory Description (If Available):
         <input type="text" name="" id="" />
       </label>

    <span style="font-weight: bold;">Suggested KBA:</span>

        <p>POS Freezing (One or Multiple)</p>

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
    
    `
  }

];



//functions
export function templateValueFunct() {
  templateSelect.addEventListener("change", (e) => {
    const values = e.currentTarget.value;
    for (let i = 0; i < array.length; i++) {
      const issueTemplate = array[i].template;
      switch (values) {
        case array[i].templateName:
          removeItems()
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
  newIssueSelect.addEventListener("change", (e) => {
    const values = e.currentTarget.value;
    const test = document.querySelector("body")
    test.classList.add("modals")
    for (let i = 0; i < array.length; i++) {
      const issueTemplate = array[i].template;
      switch (values) {
        case array[i].templateName:
         window.scrollTo({
            top: 0,
            left: 100,
            behavior: "smooth",
          });
          templateShower.innerHTML = `
              ${issueTemplate}
            `;
            templateSelect.selectedIndex = i += 2;
            // newIssueButton.selectedIndex = 0;
          const test = basicInputs()
          const cLocation = localStorage.getItem("cLocation")
          const siteAd1 = localStorage.getItem("siteAd1")
          const siteAd2 = localStorage.getItem("siteAd2")
          const callerName = localStorage.getItem("callerName")
          const altName = localStorage.getItem("altName")
          const bestTime = localStorage.getItem("bestTime")
          const emailAd = localStorage.getItem("emailAd")
          const primeNum = localStorage.getItem("primeNumber")
          const altNum = localStorage.getItem("altNumber")


          const contactInput = test[7]
          const inputText = test[5]
          const inputTextVal = []
              inputText.forEach((el) => {
                inputTextVal.push(el)
              })
              inputTextVal[1].value = cLocation //cLocation
              inputTextVal[2].value = callerName // callerName
              inputTextVal[3].value = altName //alternative name
              inputTextVal[4].value = bestTime // Best time to call
              inputTextVal[5].value = emailAd // Email Add
              
              // const primeNumVal = parseInt(primeNum)

              const contactInputsFinal = []
              contactInput.forEach((e) => {
                contactInputsFinal.push(e)
              })

       
              contactInputsFinal[0].value = primeNum

             
              contactInputsFinal[1].value = altNum

              // console.log(contactDetailsVal)
              
              
  
          

              const radioName = test[6]
              // console.log(test[2])
              const radioArrName = []
              radioName.forEach((el) => {
                radioArrName.push(el)
              })
              const finalRadio = radioArrName.slice(1,3)
              const saRad1 = document.querySelectorAll(`input[name="${finalRadio[0]}"]`);

              const saRad2 = document.querySelectorAll(`input[name="${finalRadio[1]}"]`);

              const saReValue1 = saRad1.value = siteAd1
              const saReValue2 = saRad2.value = siteAd2
              if(saReValue1 === "No") {
                saRad1[1].checked = true
              } else if(saReValue1 === "Yes") {
                saRad1[0].checked = true
              } else {
                saRad1[1].checked = false
                saRad1[0].checked = false
              }

              if(saReValue2 === "No") {
                saRad2[1].checked = true
              } else if(saReValue2 === "Yes") {
                saRad2[0].checked = true
              } else {
                saRad1[1].checked = false
                saRad1[0].checked = false
              }

      
              
          break;
        default:
          break;
      }
    }
  });
}
