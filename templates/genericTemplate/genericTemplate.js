export function genericTemplateDIR () {
    const genericTemplate =

    `
       <h1>Generic Template</h1>
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

       <p>TMPL-Generic</p>

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


        <label for="">Troubleshooting/Resolution:</label>
          <div id="FCts" class="container-fluid" contenteditable="true"></div>

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
    
       Business Impact Prioritization:<br/>
      <p>1. Can the site process any transactions in the POS? If no, set case to P2</p>
      <p>2. Can the site process any transactions in the Pumps?If no, set case to P2</p>
      <p>3.Is the site hard down (unable to transact both in the POS Pumps? If yes, set case to P2</p>

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

    return genericTemplate
}