export function POSreceiptDIR () {
    
    const POSreceiptTemplate = 
     `
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

       <p>TMPL-RcptIssue</p>

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


    return POSreceiptTemplate
}