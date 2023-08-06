import React, { createContext, useState, useEffect } from 'react';
import fakeData from '../utils/fake_data';

export const ResumeContext = createContext();

const ResumeContextProvider = (props) => {
    const [content, setContent] = useState(
        JSON.parse(localStorage.getItem("dataLocal")) || {
            personal_info: {},
            experience: {},
            education: {},
            skills: { skill1: ["", ""], skill2: ["", ""], skill3: ["", ""]},
            professional_summary: {}
        }
    );

    const [contentFake, setContentFake] = useState();

    const [control, setControl] = useState(false);

    function updatePersonalInfoData (data) {
        setContent({ ...content, personal_info: data });
    }

    function updateExperienceData(data){
        setContent({ ...content, experience: data})
    }

    function updateEducationData (data) {
        setContent({ ...content, education: data  });
    }

    function updateSkills(data){
        setContent({ ...content, skills: data })
    }
    
    function updateProfessionalSummary (data) {
        setContent({ ...content, professional_summary: data })
    }

    function addFakeData() {
        setControl(true);
        setContentFake(fakeData);
    }

    function removeFakeData() {
        setControl(false);
        setContentFake({
            personal_info: {},
            experience: {},
            education: {},
            professional_summary: {}
        })
    }

    useEffect(() => {
        localStorage.setItem("dataLocal", JSON.stringify(content));
    }, [content]);

    return (
        <ResumeContext.Provider
            value={{
                content,
                control,
                contentFake,
                setContent,
                updatePersonalInfoData,
                updateExperienceData,
                updateEducationData,
                updateSkills,
                updateProfessionalSummary,
                addFakeData,
                removeFakeData
            }}
        >
         {props.children}
         </ResumeContext.Provider>
    );

};

export default ResumeContextProvider