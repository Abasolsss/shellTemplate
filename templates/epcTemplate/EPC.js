export function EPCtemplateDIR () {
    const EPCtemplate  =
    `
      <h1>Electronic Payment Out Of Order</h1>
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
    </span>


    <label for="">
         **Service Advisory Description (if Available):
         <input type="text" name="" id="" />
       </label>


      <p>TMPL-EPC</p>

 
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
          Error message encountered (screenshot required):
         <input type="text" name="" id="" />
       </label>

        <label for="">
           *What happened prior to the issue happening?
         <input type="text" name="" id="" />
       </label>


        <label for="">
          *Did you do any troubleshooting before calling the service desk? (Please specify)
         <input type="text" name="" id="" />
       </label>


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

      <p>*Include the time stamp of the screenshot that will be attached</p>

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

    return EPCtemplate
    
}