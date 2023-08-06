import React, { useContext } from "react";
import { ResumeContext } from "../../contexts/ResumeContext";
import classes from "./Template.module.css"

function PersonalInfoSec() {

    const { content, control, contentFake } = useContext(ResumeContext);

    let contentUse;
    if (control) {
        contentUse = contentFake;
    } else {
        contentUse = content;
    }

    let divider;

    if (Object.keys(contentUse.personal_info).length > 0) {
        console.log('divider length is greater than 0')
        divider = <hr className={classes.dividerRight} /> 
    }
    else{
        console.log('divider length is equal to 0')
        divider = "";
    }

    return (
        <div>
            <div className={classes.headerResume}>  {/* classes.headerResume */}
                <div className={classes.contentHeader}>  {/* classes.contentHeader */}
                    <h1 className={classes.h1Name}>{ contentUse.personal_info.FirstName } { contentUse.personal_info.LastName }</h1>

                    <p>
                        { contentUse.personal_info.email }  { contentUse.personal_info.phno }

                        <br />
                        
                        { contentUse.personal_info.address }

                        <br />

                        { contentUse.personal_info.city} { contentUse.personal_info.country } {contentUse.personal_info.pin}

                        <br />

                        Age: { contentUse.personal_info.age }

                        <br />

                        {divider}    

                        {/* <br />                         */}

                        {/* <h4>Test somethin here vro</h4> */}
                    </p>

                </div>
            
            </div>      
        </div>

        
    )


}

export default PersonalInfoSec;