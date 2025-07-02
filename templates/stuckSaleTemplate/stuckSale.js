export function stuckSaleDIR () {
    const stuckSaleTemplate =

     `
      <h1>Stuck Fuel Sale</h1>
      
    <label for="">
      Subject:
      <input type="text" name="" id="" value="Stuck Fuel Sale (Pump# or POS#)" />
    </label>

    <label for="">
      C-Location
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


    <p>TMPL-FuelSale</p>
    
    <label for="">
      Name of Caller:
      <input type="text" name="" id="" />
    </label>

    <label for="">
      Primary Contact Number
      <input type="number" name="" id="" />
    </label>

    <label for="">
      Alternate Contact Name
      <input type="text" name="" id="" />
    </label>

    <label for="">
      Alternate Contact Number
      <input type="number" name="" id="" />
    </label>

    <label for="">
      Best Time to Call(BTTC)
      <input type="text" name="" id="" />
    </label>

    <label for="">
     Email Address (if available)
      <input type="text" name="" id="" />
    </label>

     <label for="exampleFormControlTextarea1" class="form-label"
    >
    
    Error message encountered (screenshot required)</label>
    <label>Detailed Description of the issue:</label>

  <div
      id="FCdetailed"
      class="container-fluid"
      contenteditable="true"
    ></div>

    <label for="">
     Card type used and last 4 digits (if available):
      <input type="number" name="" id="" />
    </label>

    <label for="">
     Transaction date/time:
      <input type="text" name="" id="" />
    </label>


    <label for="">
      Impacted Pump/POS number:
      <input type="text" name="" id="" />
    </label>


    <label for="">
      Transaction amount:
      <input type="text" name="" id="" />
    </label>

    <label for="">
      Is the stuck fuel sale cashed out?
      <input type="text" name="" id="" />
    </label>

    <label for="">
      Is it a valid drive off?
      <input type="text" name="" id="" />
    </label>

    <p>**If yes, follow the KB.</p>

    <label for="">
      Is it a fleet transaction?
      <input type="text" name="" id="" />
    </label>

    <p>**If yes, follow KB Fleet Transaction Failures.</p>

    <label for="">Troubleshooting/Resolution:</label>
    <div id="FCts" class="container-fluid" contenteditable="true"></div>

    <div class="sample" contenteditable="true"></div>

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

      <p>**If yes, note the case number/s and raise to L1.5/L2 for further investigation.</p>

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

    return stuckSaleTemplate
}