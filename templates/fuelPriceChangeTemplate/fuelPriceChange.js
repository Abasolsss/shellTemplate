export function fuelPriceChangeDir () {
    const  fuelPriceChangeTemplate = 
    `
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
          **Service Advisory Description (if Available):
         <input type="text" name="" id="" />
       </label>


       <p>TMPL-FuelPrice</p>




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

      <p>**If yes, note the case number/s and raise to L1.5/L2 for further investigation.</p>

      <label for="">
         If the issue got fixed, what resolved the issue?
            <input type="text" name="" id="" />
        </label>

        <label for="">
         If the issue is not fixed, what is the next step?
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

    return fuelPriceChangeTemplate
}