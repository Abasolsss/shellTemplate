export function EODfailedOnPOSDir () {
    const EODfailedOnPOStemp = 
    `
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

      <p>TMPL-EODFailed</p>


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


       <label for="exampleFormControlTextarea1" class="form-label"
         >Detailed Description of the issue:</label
       >
       <div
           id="FCdetailed"
           class="container-fluid"
           contenteditable="true"
         ></div>


      <label for="">
        *What happened prior to the issue happening?
         <input type="text" name="" id="" />
      </label>

       <label for="">
         *Did you do any troubleshooting before calling the service desk? (Please specify)
         <input type="text" name="" id="" />
      </label>


       <label for="">
         Error message encountered (screenshot required):
         <input type="text" name="" id="" />
      </label>

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

  
  <span>
    Is there any ticket/s opened related to the issue in the past month?
      <label>
        Yes
        <input type="radio" name="SAradio5" value="Yes" />
      </label>

      <label>
        No
        <input type="radio" name="SAradio5" value="No" />
      </label>
    </span>

      <p>
        **If yes, note the case number/s and raise to L1.5/L2 for further investigation.
      </p>

       <label for="">Troubleshooting/Resolution:</label>
          <div id="FCts" class="container-fluid" contenteditable="true"></div>

        <label for="">
         If the issue got fixed, what resolved the issue?
            <input type="text" name="" id="" />
          </label>

        <label for="">
         IIf the issue is not fixed, what is the next step?
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
     `

     return EODfailedOnPOStemp
}