export function scannerNotworkingDIR () {
    

    const scannerNotWorkingTemplate = 
     `
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
       **Service Advisory Description (if Available):
         <input type="text" name="" id="" />
       </label>
       
      <p>TMPL-SCANNER</p>

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

    <span>
    Is there any ticket/s opened related to the issue in the past month?
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

        <div class="sample" contenteditable="true"></div>

        <label for="">
         If the issue got fixed, what resolved the issue?
            <input type="text" name="" id="" />
          </label>

        <label for="">
         If the issue is not fixed, what is the next step?
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

    return scannerNotWorkingTemplate
}