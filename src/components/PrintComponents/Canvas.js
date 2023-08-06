import React from "react";
import PersonalnfoSec from './PersonalInfoSec';
import EducationSec from './EducationSec';
import ExperienceSec from './ExperienceSec';
import SkillsSec from './SkillsSec';
import SummarySec from './SummarySec';
import classes from '../PrintComponents/Template.module.css'

function Canvas() {
    return ( 
        <div className={classes.template}>

            <div size="A4" className="page">
                <PersonalnfoSec />
                {/* <hr /> */}
                <ExperienceSec />
                {/* <hr /> */}
                <EducationSec />
                {/* <hr /> */}
                <SkillsSec />
                {/* <hr /> */}
                <SummarySec />

            </div>

        </div>
    )
}

export default Canvas;