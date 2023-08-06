import React, { useContext } from "react";
import Canvas from './PrintComponents/Canvas';
import { ResumeContext } from "../contexts/ResumeContext";
import { useNavigate } from "react-router-dom";
import classes from './PrintComponents/Template.module.css'

function TemplateSelectAndDownload() {
    const { setContent } = useContext( ResumeContext );
    const handleDeleteDate = (e) => {
      e.preventDefault();
      localStorage.clear();
      setContent({
        personal_info: { },
        education: { },
        experience: { },
        professional_summary: { },
        skills: { }
      });
    };

    const handleSaveToPDF = (e) => {
      
      console.log('Clicked here') 
      e.preventDefault();

      var content = document.getElementById('divcontents')
      var pri = document.getElementById('ifmcontentstoprint').contentWindow;

      pri.document.open();
      pri.document.write(content.innerHTML);
      pri.document.close();
      pri.focus();
      pri.print();

      // window.print();
    };

    const Print = () => {
      let originalContents = document.body.innerHTML;
      let printContents = document.getElementById('divcontents').innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;

      window.location.reload(false);
      // useNavigate("#")
    }

    return (
      <div className={classes.pagemarg}>
          <div className={classes.btns}>
            <button href="#" className="btn btn-danger" onClick={ handleDeleteDate }>
              Delete all Data
            </button>



            {/* <buttonvj href="#" onClick={ Print }>
              Save to PDF
            </a> */}

            <button type="" className="btn btn-info" onClick={Print}> Print PDF </button>
          </div>
            <h4 className={classes.elemargin}> Resume Generated: </h4>
          
          <hr />
          
          <div className={classes.tempdiv}>
            <div id="divcontents">
              <Canvas />
            </div>

          </div>

            <hr />
          <h4> Thank you for using our product!! </h4>
                <h4>         You can now download your resume in PDF format by clicking the Print Button above. </h4>
            <br /><br /><br />
          {/* <iframe id="ifmcontentstoprint" style='height: 0px; width: 0px; position: absolute'></iframe> */}
          {/* <div id="ifmcontentstoprint">

          </div>
 */}
      </div>




    )

}

export default TemplateSelectAndDownload;


// import React from 'react'

// function TemplateSelectAndDownload() {
//   return (
//     <div>

//         <p className="display-1">Success! File Downloading.. </p>


//     </div>
//   )
// }

// export default TemplateSelectAndDownload