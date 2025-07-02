export function POSfreezingDIR () {
    
    const POSfreezingTemplate = 
    `
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
        **Service Advisory Description (if Available):
         <input type="text" name="" id="" />
       </label>
       <p>TMPL-POSFreeze</p>

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

          <p>**Check previous cases opened related to the freezing issue and gather what was done to resolve the issue**</p>
      
        <label for="">Troubleshooting/Resolution:</label>
          <div id="FCts" class="container-fluid" contenteditable="true"></div>

        <div class="sample" contenteditable="true"></div>

  <span>
    Is there any ticket/s opened related to the issue in the past month?
      <label>
        Yes
        <input type="radio" name="SAradio2" value="Yes" />
      </label>

      <label>
        No
        <input type="radio" name="SAradio2" value="No" />
      </label>
    </span>
    
    <p>**If yes, note the case number/s and raise to L1.5/L2 for further investigation.</p>

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

    return POSfreezingTemplate
}