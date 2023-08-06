import React, { useContext } from 'react';
import { ResumeContext } from '../../contexts/ResumeContext';
import classes from './Template.module.css'

function ExperienceSec() {

    const { content, control, controlFake } = useContext(ResumeContext);

    let contentUse;
    if (control){
        contentUse = contentFake;
    } else {
        contentUse = content;
    }

    let title;
    if (Object.keys(contentUse.experience).length === 0) {
        title = "";
    } else {
        title = (
            <h3>
                <strong>Professional Experience</strong>
            </h3>
        );
    }

    // let bulletExperience1 = contentUse.professional.desc1.map((el,index) => {
    //     if (el === "") {
    //         return "";
    //     } else {
    //         return <li key={index}> {el} </li>;
    //     }
    // });

    // let bulletExperience2 = contentUse.professional.desc2.map((el, index) => {
    //     if (el === "") {
    //         return "";
    //     } else {
    //         return <li key={index}> {el} </li>;
    //     }
    // });

    return (
        <div className={classes.professionalResume}>
            <div className="">
                {title}
                <p>

                    <strong>{ contentUse.experience.Employer }</strong> {" "}
                    { contentUse.experience.City } {", "} { contentUse.experience.State }

                </p>

                <p>
                    { contentUse.experience.JobTitle } {"     "}
                    { contentUse.experience.startDate } — { contentUse.experience.endDate }
                </p>

            </div>
        </div>
    )



}

export default ExperienceSec;