import React, { useContext } from 'react';
import { ResumeContext } from '../../contexts/ResumeContext';
import classes from './Template.module.css'

function EducationSec() {

    const { content, control, contentFake } = useContext(ResumeContext);

    let contentUse;
    if (control){
        contentUse = contentFake;
    } else {
        contentUse = content;
    }

    let title;
    if (Object.keys(contentUse.education).length === 0) {
        title = "";
    } else {
        title = (
            <h3>
                <strong> Education </strong>
            </h3>
        );
    }

    // let bulletEducation;
    // if (!contentUse.education.additional) {
    //     bulletEducation = "";
    // } else {
    //     bulletEducation = (
    //         <ul>
    //             <li> { contentUse.education.additional } </li>
    //         </ul>
    //     );
    // }
    return (
        <div className={ classes.professionalResume}>

            <div className="">
                {title}

                <p>
                    <strong> { contentUse.education.schoolName } </strong>
                    {", "} { contentUse.education.City }
                </p>

                <p>
                    { contentUse.education.degree } {", "} { contentUse.education.fieldOfStudy } {"       "} { contentUse.education.GraduationDate }
                </p>
                {/* { bulletEducation } */}

            </div>       

        </div>
    )

}

export default EducationSec;