export function pumpsDownDir () {
    const pumpsDownTemplate = 
     `
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

       <p>TMPL-PUMPIssue</p>
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
         </ul>

      <span>
          Are there any related tickets opened for the same pump/s in the past month?
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
        **If yes, note the case number/s for reference.
      </p>


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

    return pumpsDownTemplate
}