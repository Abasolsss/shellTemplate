export function netConnTemplateDir () {
    const netConnTemplate = 
    `
     <h1>Network Connectivity</h1>
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

        <p>TMPL-NetConn</p>

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
    Is the site able to process transactions from POS and or Pumps?
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
    Is this an RTM site?
      <label>
        Yes
        <input type="radio" name="SAradio4" value="Yes" />
      </label>

      <label>
        No
        <input type="radio" name="SAradio4" value="No" />
      </label>
    </span>


     <label>
        **If yes, please note the cutover date from the RTM sites file:
        <input type="text" name="" />
      </label>
    
  <span>
   Is the site offline on toolset?
      <label>
        Yes
        <input type="radio" name="SAradio5" value="Yes" />
      </label>

      <label>
        No
        <input type="radio" name="SAradio5" value="No" />
      </label>
    </span>

    <p>Check the status of the devices.</p>

    <p>** if RTM, check Meraki and VMware</p>

    <p>** if non-RTM, check the Cybera</p>

 <span>
   Is the network cable/s properly connected?
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
   Was the modem Power cycled?
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
    `

    return netConnTemplate
}