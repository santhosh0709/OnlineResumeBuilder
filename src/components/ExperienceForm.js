// import React, { useState } from 'react';
// import {useForm} from 'react-hook-form';

import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { ResumeContext } from '../contexts/ResumeContext'
import { useNavigate } from 'react-router-dom'


function ExperienceForm() {

    const { content, updateExperienceData, removeFakeData } = useContext (
        ResumeContext
    );

    const navigate = useNavigate();

    const { register, formState: {errors}, handleSubmit } = useForm();

    const onSubmit = (data) => {

        console.log('onsubmit function experience called here: ', data)
        removeFakeData();
        
        updateExperienceData(data);

        alert('Data Saved')

        navigate('/EducationForm')
    };

    return (
        
        <div className=''>
            {/* alert('Entered') */}

             <p className="display-6 text-center">Experiences</p>

        

            <h3 className='text-dark fw-bold' style={{marginLeft:'25px'}}>Tips for this section</h3>
            
            <div className='row'>
            
            <div className='col-sm-8'>
                
                <ul className='m-3' style={{fontSize:'1.3rem'}}>

                    <li className='p-2' >Your most recent or current job should be listed first. Then, work in reverse chronological order, from your newest to your oldest jobs.</li>

                    <li className='p-2'>When describing your job duties, avoid using personal pronouns like “I, ” “me”, "my" etc.</li>

                    <li  className='p-2'>Showcase your skills by using strong action verbs (“led,” “organized”, "coordinated"). Use figures to add value when possible. For example: "decreased production costs by 20%".</li>


                    <li  className='p-2'>Use bullet points to list your job responsibilities in short, direct sentences.</li>



                </ul>

            </div>

            {/* for image */}
            <div className="col-sm-4"></div>
            </div>
            <p className='fst-italic' style={{paddingLeft:'25px'}}><b>Note:</b> List your work experience, from the most recent to the oldest</p>
            <hr></hr>

            <h2 className='text-center mb-3'>Fill the Form</h2>



    {/* Form */}


            <form className='container '
                noValidate
                autoComplete='off'
                onSubmit={handleSubmit(onSubmit)}>


                {/* Employer Job */}


                <div className='row mb-3'>

                <div className='col-sm-6'>
                <label htmlFor="Employer">Employer</label>
                
                <input type="text" id='Employer' className='form-control' {...register('Employer')} defaultValue={ content.experience.Employer }/>


                </div>

                
                    {/*Job Title  */}


                <div className='col-sm-6'>
                <label htmlFor="JobTitle">JobTitle</label>
                
                <input type="text" id='JobTitle' className='form-control' {...register('JobTitle')} defaultValue={ content.experience.JobTitle }/>


                </div>

                
                </div>

                <div className="row mb-3">

                    <div className="col-sm-6">
                            <label htmlFor="City">City</label>
                
                            <input type="text" id='City' className='form-control' {...register('City')} defaultValue={ content.experience.City }/>
                        
                    </div>



                    <div className="col-sm-6">
                            <label htmlFor="State">State</label>
                
                            <input type="text" id='State' className='form-control' {...register('State')} defaultValue={ content.experience.State }/>
                        
                    </div>

                </div>


                <div className="row mb-3">

                    <div className="col-sm-6">
                            <label htmlFor="startDate">Start Date</label>
                
                            <input type="date" id='startDate' className='form-control' {...register('startDate')} defaultValue={ content.experience.startDate } />
                        
                    </div>



                    <div className="col-sm-6">
                            <label htmlFor="endDate">End Date</label>
                
                            <input type='date' id='endDate' className='form-control' {...register('endDate')} defaultValue={ content.experience.endDate }/>
                        
                    </div>

                </div>

        


                <div className="mb-3">

                    <label htmlFor="jobDescription">Job description</label>
                    <textarea id='jobDescription' className='form-control' rows="10"  {...register('jobDescription')}  defaultValue={ content.experience.jobDescription }></textarea>


                </div>


                {/* for buttons */}

                <div className='d-flex justify-content-between mt-4'>

                <button  className="btn bg-info"><a href='http://localhost:4000/Forms'>Back Test</a></button>


                <button type='submit' className="btn bg-warning " onClick={handleSubmit(onSubmit)}>Save</button>

                </div>




            </form>


            <button className="btn bg-warning d-block mx-auto"><a href='http://localhost:4000/EducationForm'>Go to Next Page</a></button>






        </div>
    )

}

export default ExperienceForm




// function ExperienceForm() {
  
//     const {register,handleSubmit,formState:{errors}} = useForm()


//     let [experience,setExperience] = useState([])
 

//     const onSaveNext = (experienceObj)=>{

//         console.log(experienceObj)
   
//         setExperience([...experience,experienceObj])
        
   
//    }
   
//     const onClickingSave=()=>{
   
//         alert("Data saved")
         
//     }


  
  
//     return (

//     <div>

//         {/* Giving Tips */}
//         <p className="display-6 text-center">Experiences</p>

        

//         <h3 className='text-dark fw-bold' style={{marginLeft:'25px'}}>Tips for this section</h3>
        
//         <div className='row'>
        
//         <div className='col-sm-8'>
            
//             <ul className='m-3' style={{fontSize:'1.3rem'}}>

//                 <li className='p-2' >Your most recent or current job should be listed first. Then, work in reverse chronological order, from your newest to your oldest jobs.</li>

//                 <li className='p-2'>When describing your job duties, avoid using personal pronouns like “I, ” “me”, "my" etc.</li>

//                 <li  className='p-2'>Showcase your skills by using strong action verbs (“led,” “organized”, "coordinated"). Use figures to add value when possible. For example: "decreased production costs by 20%".</li>


//                 <li  className='p-2'>Use bullet points to list your job responsibilities in short, direct sentences.</li>



//             </ul>

//         </div>

//         {/* for image */}
//         <div className="col-sm-4"></div>
//         </div>
//         <p className='fst-italic' style={{paddingLeft:'25px'}}><b>Note:</b> List your work experience, from the most recent to the oldest</p>
//         <hr></hr>

//         <h2 className='text-center mb-3'>Fill the Form</h2>



// {/* Form */}


//         <form className='container ' onSubmit={handleSubmit(onSaveNext)}>


//             {/* Employer Job */}


//             <div className='row mb-3'>

//             <div className='col-sm-6'>
//             <label htmlFor="Employer">Employer</label>
               
//             <input type="text" id='Employer' className='form-control' {...register('Employer')} />


//             </div>

            
//                 {/*Job Title  */}


//             <div className='col-sm-6'>
//             <label htmlFor="JobTitle">JobTitle</label>
               
//             <input type="text" id='JobTitle' className='form-control' {...register('JobTitle')} />


//             </div>

            
//             </div>

//             <div className="row mb-3">

//                 <div className="col-sm-6">
//                         <label htmlFor="City">City</label>
               
//                         <input type="text" id='City' className='form-control' {...register('City')} />
                       
//                 </div>



//                 <div className="col-sm-6">
//                         <label htmlFor="State">State</label>
               
//                         <input type="text" id='State' className='form-control' {...register('State')} />
                       
//                 </div>

//             </div>


//             <div className="row mb-3">

//                 <div className="col-sm-6">
//                         <label htmlFor="startDate">Start Date</label>
               
//                         <input type="date" id='startDate' className='form-control' {...register('startDate')} />
                       
//                 </div>



//                 <div className="col-sm-6">
//                         <label htmlFor="endDate">End Date</label>
               
//                         <input type='date' id='endDate' className='form-control' {...register('endDate')} />
                       
//                 </div>

//             </div>

    


//             <div className="mb-3">

//                 <label htmlFor="jobDescription">Job description</label>
//                 <textarea className='form-control' rows="10"></textarea>


//             </div>


//             {/* for buttons */}

//             <div className='d-flex justify-content-between mt-4'>

//                <button  className="btn bg-info"><a href='http://localhost:3000/Forms'>Back Test</a></button>


//                <button type='submit' className="btn bg-warning " onClick={onClickingSave}>Save</button>

//             </div>




//         </form>


//         <button className="btn bg-warning d-block mx-auto"><a href='http://localhost:3000/EducationForm'>Go to Next Page</a></button>










//     </div>
//   )
// }

// export default ExperienceForm