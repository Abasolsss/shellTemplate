export function GOCOtemplateDIR () {
    const gocoTemplate = 
    `
       <h3>GoCo Tech Calling for L1 Troubleshooting with Site</h3>
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
    
       <p>TMPL-GOCO</p>


       <label for="">
         Name of Caller:
         <input type="text" name="" id="" />
       </label>

       <label for="">
         Primary Contact Number
         <input type="number" name="" id="" />
       </label>

       <label for="exampleFormControlTextarea1" class="form-label"
         >Issue with the site network:</label
       >
       <div
           id="FCdetailed"
           class="container-fluid"
           contenteditable="true"
         ></div>


         <span>
         Are you able to successfully warm transferred the tech to the site?
         <label>
           Yes
           <input type="radio" name="SAradio3" value="Yes" />
         </label>

         <label>
           No
           <input type="radio" name="SAradio3" value="No" />
         </label>
       </span>

        <label for="">**If no, state the reason why:</label>
          <div id="FCts" class="container-fluid" contenteditable="true"></div>

        <div class="sample" contenteditable="true"></div>

       

         <label for="">
        Service Advisory Description (If Available):
         <input type="text" name="" id="" />
       </label>

          <span style="font-weight: bold;">Suggested KBA:</span>

        <p>GoCo Tech Calling for L1 Troubleshooting with Site</p>

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

    return gocoTemplate
}