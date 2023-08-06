import React, { useContext } from "react";
import { ResumeContext } from "../../contexts/ResumeContext";
import classes from './Template.module.css'

function SummarySec() {
    
    const { content, control, contentFake } = useContext(ResumeContext);

    let contentUse;
    if (control){
        contentUse = contentFake;
    } else {
        contentUse = content;
    }

    let title;

    if (contentUse.professional_summary.length === 0){
        title = "";
    } else {
        title = (
            <h3>
                <strong>Profile Summary / Professional Summary</strong>
            </h3>
        )
    }

    // let bulletsSkills = contentUse.skills.map((el, index) => {
    //     if (el === ""){
    //         return "";
    //     } else {
    //         return <li key = {index}> {el} </li>
    //     }
    // });

    return (
        <div className="">
            <div className={classes.professionalResume}>

                {title} 
                {/* <ul> { bulletsSkills }</ul> */}

                <p>

                    { contentUse.professional_summary.summary }

                </p>

                {/* {contentUse.skills.skill1}{"   —   "} { contentUse.skills.skill_1_level }
                <br />
                {contentUse.skills.skill2}{"   —   "} { contentUse.skills.skill_2_level }
                <br />
                {contentUse.skills.skill3}{"   —   "} { contentUse.skills.skill_3_level }
                <br />
                {contentUse.skills.skill4}{"   —   "} { contentUse.skills.skill_4_level }  
                <br />
                {contentUse.skills.skill5}{"   —   "} { contentUse.skills.skill_5_level }
                <br />
                {contentUse.skills.skill6}{"   —   "} { contentUse.skills.skill_6_level }
                <br /> */}

            </div>
        </div>
    )


}

export default SummarySec;