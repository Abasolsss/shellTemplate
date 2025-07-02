
export function pinpadRelatedDIR () {
    

    const pinpadRelatedTemplate =
     `
      <h1>PINPAD Related Issue</h1>
      
    <label for="">
      Subject:
      <input type="text" name="" id="" />
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


    <p>TMPL-PinPad</p>
    
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
      Model/Device Type:
      <input type="text" name="" id="" />
    </label>

    <label for="">
     Which POS is the Pinpad connected to:
      <input type="text" name="" id="" />
    </label>

    
    <label for="">
      How many devices are impacted:
      <input type="text" name="" id="" />
    </label>
    
    <label for="">
     NVP Value Status:
      <input type="text" name="" id="" />
    </label>

    <label for="">
      Have you tried to initialize pinpad?
      <input type="text" name="" id="" />
    </label>

    <label for="">
   Is the device physically damaged (cut/frayed cable, button not working, cracked/broken)?
      <input type="text" name="" id="" />
    </label>

  <p>**If yes, assign to L2 for tech dispatch.</p>

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

    return pinpadRelatedTemplate
}