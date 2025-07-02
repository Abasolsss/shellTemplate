export function siteFacilityIssueDir () {

    const siteFacilityIssueTemplate = 

     `
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

      <label>
       **Service Advisory Description (if Available):
         <input type="text" name="" />
       </label>


       <p>TMPL-SiteFac</p>

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


  <span>
    Is there any ticket/s opened related to the issue in the past month?
      <label>
        Yes
        <input type="radio" name="SAradio3" value="Yes" />
      </label>

      <label>
        No
        <input type="radio" name="SAradio3" value="No" />
      </label>
    </span>


         <p>
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
    

    return siteFacilityIssueTemplate
    
}