export function FCofflineTemplateDir () {
const FCofflineTemplate = 
    `
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

          <p>TMPL-FC</p>

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


           <span>
            Is there power in the pumps/fuel dispensers?
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
           How many pumps fuel dispensers are impacted?
            <input type="text" name="" id="" />
          </label>

          <span>
            is the Fuel Controller available on SMTOOLS?
            <label>
              Yes
              <input type="radio" name="SAradio6" value="Yes" />
            </label>

            <label>
              No
              <input type="radio" name="SAradio6" value="No" />
            </label>
          </span>

          <p>**If yes, attempt to do remote reset.</p>
          <p>**If no, follow the KB instructions.</p>


          <label for="">
            Type of Fuel Controller:
            <input type="text" name="" id="" />
          </label>

       <span>
         Is the emergency stop button pressed?
            <label>
              Yes
              <input type="radio" name="SAradio7" value="Yes" />
            </label>

            <label>
              No
              <input type="radio" name="SAradio7" value="No" />
            </label>
        </span>

        <p>**If yes, follow site safety procedures.</p>
        

        <span>
         Is there any ticket/s opened related to the issue in the past month?
            <label>
              Yes
              <input type="radio" name="SAradio8" value="Yes" />
            </label>

            <label>
              No
              <input type="radio" name="SAradio8" value="No" />
            </label>
        </span>

        
        <p>**If yes, note the case number/s and raise to L1.5/L2 for further investigation.</p>

          <label for="">Troubleshooting/Resolution:</label>
          <div id="FCts" class="container-fluid" contenteditable="true"></div>

          <label>
          If the issue got fixed, what resolved the issue?
            <input type="text" name="" />
          </label>

          <label>
          If the issue is not fixed, what is the next step?
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
          </div>
          

    `

    return FCofflineTemplate


}