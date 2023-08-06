// import React,{useState} from 'react'
// import {useForm} from 'react-hook-form';

import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { ResumeContext } from '../contexts/ResumeContext'
import { useNavigate } from 'react-router-dom';

function EducationForm() {

    const { content, updateEducationData, removeFakeData } = useContext(
        ResumeContext
    );

    // for navigation purpose
    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log('Education Data Saved here', data);

        removeFakeData();
        updateEducationData(data);
        alert('Data Saved')

        navigate('/SkillsForm')
    };

    return (

        <div className=''>
            <h3 className='text-center'>Education</h3>

            <p className='fst-italic' style={{paddingLeft:'25px'}}><b>Note:</b> Add information about your education</p>



            {/* Form */}

                
            <form className='container '
                noValidate
                autoComplete='off' 
                onSubmit={handleSubmit(onSubmit)}
                >


                {/* sCHOOLnAME */}


                <div className='row mb-3'>

                    <div className='col-sm-6'>
                        <label htmlFor="schoolName">SchoolName</label>

                        <input type="text" id='schoolName' className='form-control' {...register('schoolName',{required:true})} defaultValue={ content.education.schoolName }/>

                        {errors.schoolName?.type==='required'&&<p className="text-danger">* SchoolName is required</p>}

                    </div>


                    {/*City  */}


                    <div className='col-sm-6'>
                        <label htmlFor="City">City</label>
        
                        <input type="text" id='City' className='form-control' {...register('City',{required:true})} defaultValue={ content.education.City }/>

                        {errors.City?.type==='required'&&<p className="text-danger">* City is required</p>}
                    </div>


                </div>

                <div className="row mb-3">

                    <div className="col-sm-6">
                        
                        <label htmlFor="State">State</label>
    
                        <input type="text" id='State' className='form-control' {...register('State',{required:true})} defaultValue={ content.education.State } />
            
                    </div>

                    {/* Dropdown is required */}

                    <div className="col-sm-6">
                            <label htmlFor="degree">Degree</label>
    
                            <input type="text" id='degree' className='form-control' {...register('degree',{required:true})} defaultValue={ content.education.degree }/>
            
                            {errors.degree?.type==='required'&&<p className="text-danger">* Degree is required</p>}

                    </div>

                </div>


                <div className="row mb-3">

                    <div className="col-sm-6">
                        
                        <label htmlFor="fieldOfStudy">Field Of Study</label>
    
                        <input type="text" id='fieldOfStudy' className='form-control' {...register('fieldOfStudy',{required:true})} defaultValue={ content.education.degree }/>
            
                        {errors.fieldOfStudy?.type==='required'&&<p className="text-danger">* Field Of Study is required</p>}

                    </div>



                    <div className="col-sm-6">
                        
                        <label htmlFor="GraduationDate">End Date</label>
        
                        <input type='date' id='GraduationDate' className='form-control' {...register('GraduationDate', {required: true})} defaultValue={ content.education.GraduationDate }/>

                        { errors.GraduationDate?.type === 'required' && <p className='text-danger'>* Graduation Data is required </p> } 
                    </div>

                </div>


                {/* for buttons */}

                <div className='d-flex justify-content-between mt-4'>

                    <button  className="btn bg-info"><a href='http://localhost:4000/ExperienceForm'>Back</a></button>


                    <button type='submit' className="btn bg-warning " onClick={handleSubmit(onSubmit)}>Save</button>

                </div>




            </form>


            <button className="btn bg-warning d-block mx-auto"><a href='http://localhost:4000/SkillsForm'>Go to Next Page</a></button>
                          



        </div>
    )


}

export default EducationForm;

// function EducationForm() {


//     const {register,handleSubmit,formState:{errors}} = useForm()


//     let [education,setEducation] = useState([])
 

//     const onSaveNext = (educationObj)=>{

//         console.log(educationObj)
   
//         setEducation([...education,educationObj])
        
   
//    }
   
//     const onClickingSave=()=>{
   
//         alert("Data saved")
         
//     }







//   return (
//     <div>

//         <h3 className='text-center'>Education</h3>

//         <p className='fst-italic' style={{paddingLeft:'25px'}}><b>Note:</b> Add information about your education</p>



//         {/* Form */}

            
//         <form className='container ' onSubmit={handleSubmit(onSaveNext)}>


//                 {/* sCHOOLnAME */}


//                 <div className='row mb-3'>

//                         <div className='col-sm-6'>
//                             <label htmlFor="schoolName">SchoolName</label>
   
//                             <input type="text" id='schoolName' className='form-control' {...register('schoolName',{required:true})} />

//                             {errors.schoolName?.type==='required'&&<p className="text-danger">* SchoolName is required</p>}

//                 </div>


//                 {/*City  */}


//                 <div className='col-sm-6'>
//                 <label htmlFor="City">City</label>
   
//                 <input type="text" id='City' className='form-control' {...register('City',{required:true})}/>

//                 {errors.City?.type==='required'&&<p className="text-danger">* City is required</p>}
//                 </div>


//             </div>

//             <div className="row mb-3">

//                 <div className="col-sm-6">
//                     <label htmlFor="State">State</label>
   
//                     <input type="text" id='State' className='form-control' {...register('State',{required:true})} />
           
//                  </div>

//                 {/* Dropdown is required */}

//                 <div className="col-sm-6">
//                         <label htmlFor="degree">Degree</label>
   
//                         <input type="text" id='degree' className='form-control' {...register('degree',{required:true})} />
           
//                         {errors.degree?.type==='required'&&<p className="text-danger">* Degree is required</p>}

//                 </div>

//             </div>


//             <div className="row mb-3">

//                 <div className="col-sm-6">
//                     <label htmlFor="fieldOfStudy">Field Of Study</label>
   
//                     <input type="text" id='fieldOfStudy' className='form-control' {...register('fieldOfStudy',{required:true})} />
           
//                     {errors.fieldOfStudy?.type==='required'&&<p className="text-danger">* Field Of Study is required</p>}

//              </div>



//             <div className="col-sm-6">
//                 <label htmlFor="GraduationDate">End Date</label>
   
//                 <input type='date' id='GraduationDate' className='form-control' {...register('GraduationDate')} />
           
//              </div>

//         </div>


//         {/* for buttons */}

//         <div className='d-flex justify-content-between mt-4'>

//         <button  className="btn bg-info"><a href='http://localhost:3000/ExperienceForm'>Back</a></button>


//         <button type='submit' className="btn bg-warning " onClick={onClickingSave}>Save</button>

//         </div>




//     </form>


//         <button className="btn bg-warning d-block mx-auto"><a href='http://localhost:3000/SkillsForm'>Go to Next Page</a></button>




















//     </div>
//   )
// }

// export default EducationForm