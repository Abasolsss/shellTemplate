export function BOStemplateDIR () {
    
    const BOStemplate = 
    `
      <h1>BOS Password Reset</h1>
      
    <label for="">
      Subject:
      <input type="text" name="" id=""/>
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


    <p>TMPL-PWreset</p>


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



     <label for="exampleFormControlTextarea1" class="form-label"
    >
    
    <label>Detailed Description of the issue:</label>

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
     Is the account locked?
      <input type="text" name="" id="" />
    </label>

  <p>**If yes, unlock the account via Computer Management.</p>

  <label for="">
    Is the manager trying to change their current password or can they still remember the expired password?
      <input type="text" name="" id="" />
  </label>

    <p>**If yes, guide them with the New Password Requirement.</p>


   <label for="">
   Is the manager requesting for a password reset for forgotten password?
      <input type="text" name="" id="" />
  </label>

  <label for="">
  Was the secret code successfully verified?
      <input type="text" name="" id="" />
  </label>

  <p>**If yes, proceed with the password reset process.</p>
  <p>**If no, advise them to reach out to their Territory Manager.</p>

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

    return BOStemplate
}