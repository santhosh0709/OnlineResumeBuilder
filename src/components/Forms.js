// import {useForm} from 'react-hook-form';
// import { useState } from 'react';

import React, { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { ResumeContext } from '../contexts/ResumeContext';
import { useNavigate } from 'react-router-dom';

function Forms() {
    const { content, updatePersonalInfoData, removeFakeData } = useContext(
        ResumeContext
    );

    // for navigation purpose
    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit } = useForm();

    // const onSaveNext = (profileObj) => {
    //     // axios.post('http://localhost:4000/user-api/create-user', profileObj)
    //     // .then(res => {
    //     //     console.log(res);
    //     //     if (res.data.message === 'User created successfully'){
    //     //         navigate('/ExperienceForm');
    //     //     }
    //     // })
    //     // .catch(err => {
    //     //     console.log('Error in submitting form', err)
    //     // })
    //     console.log('On Save Next ', profileObj);
    //     onSubmit(profileObj)
    //     navigate('/ExperienceForm')
    // }
    
    // const onClickingSave = () => {
    //     alert('Data Saved')
    // }

    const onSubmit = (data) => {
        console.log('onSubmit function called here : ', data);
        removeFakeData();
        console.log(data);
        updatePersonalInfoData(data);

        alert('Data Saved')

        navigate('/ExperienceForm')
    };

    return (
        
        <div className=''>


            {/* { alert("Entered") }  it came double times because when the state changed, the component reloaded leading to double alerts */}
            {/* console.log("Entered") */}

            {/* { alert("Test 2 ing")} */}

            <p className='display-6 text-center'>Personal Info</p>

            <p className="fst-italic" style={{paddingLeft:'120px'}}><b>Note:</b>Employers will use this information to contact you.</p>

            <form className='container' 
                noValidate
                autoComplete='off'
                onSubmit={handleSubmit(onSubmit)}
                >

                    <div className="row">
               


               {/* FirstName */}


               <div className='mb-3 col-sm-6'>

               <label htmlFor="FirstName">FirstName</label>
               
                <input type="text" id='FirstName' className='form-control' {...register('FirstName',{required:true,maxLength:15})} defaultValue={ content.personal_info.FirstName }/>

               {/* Validating FirstName and its max length */}
               
               
               {errors.FirstName?.type==='required'&&<p className="text-danger">* FirstName is required</p>}

               {errors.FirstName?.type==='maxLength'&&<p className='text-danger'>* Max length is 15</p>}



                </div>



                {/* Last Name */}

                <div className='mb-3 col-sm-6'>

                <label htmlFor="LastName">LastName</label>
               
                <input type="text" id='LastName' className='form-control' {...register('LastName',{required:true,maxLength:15})} defaultValue={ content.personal_info.LastName } />

                
                    {/* Validating LastName and its max length */}


                {errors.LastName?.type==='required'&&<p className="text-danger">* LastName is required</p>}

               {errors.LastName?.type==='maxLength'&&<p className='text-danger'>* Max length is 15</p>}

                
                
                </div>

                </div>


                <div className='mb-3'>


                    {/* E-mail */}

                <label htmlFor="email">E-mail</label>
               
                <input type="email" id='email' className='form-control' {...register('email',{required:true})} defaultValue={ content.personal_info.email }/>

                
               {/* Validating Email */}

                {errors.email?.type==='required'&&<p className="text-danger">* Email is required</p>}
 
                
                
                </div>




                <div className="row">

                
                    {/* Age */}


                    <div className="mb-3 col-sm-6">

                         <label htmlFor="age">Age</label>

                         <input type="number" id="age" className='form-control' {...register('age')} defaultValue={ content.personal_info.age }/>


                    </div>

                    {/* Phone Number */}

                    <div className="mb-3 col-sm-6">

                         <label htmlFor="phno">Phone Number</label>

                         <input type="number" id="phno" className='form-control' {...register('phno',{required:true, minLength:10, maxLength:10})} defaultValue={ content.personal_info.phno }/>

                         {/* Validating Phone number, its max and min length */}



                         {errors.phno?.type==='required'&&<p className="text-danger">* Phone Number is required</p>}

                         {errors.phno?.type==='minLength'&&<p className='text-danger'>* Min length is 10</p>}

                         {errors.phno?.type==='maxLength'&&<p className='text-danger'>* Max length is 10</p>}

                    </div>

                </div>


                <div className='mb-3'>

                         <label htmlFor="address">Address</label>

                         <input type="text" id="address" className='form-control' {...register('address', {required:true})} defaultValue={ content.personal_info.address }/>

                        {errors.address?.type === 'required' && <p className='text-danger'>* Address is required</p>}
                </div>






               <div className="row">
                
                <div className='mb-3 col-sm-4'>

                    <label htmlFor="city">City</label>
               
                     <input type="text" id='city' className='form-control' {...register('city', {required: true})} defaultValue={ content.personal_info.city }/>

                    {errors.city?.type === 'required' && <p className='text-danger'>* City is required field </p>}

                </div>

                
                <div className='mb-3 col-sm-4'>

                         <label htmlFor="country">Country</label>
               
                        <input type="text" id='country' className='form-control' {...register('country', { required: true })} defaultValue={ content.personal_info.country }/>

                        { errors.country?.type === 'required' && <p className='text-danger'> *Country is required field </p> }

                </div>


               < div className='mb-3 col-sm-4'>

                    <label htmlFor="pin">Pincode</label>     

                    <input type="number" id='pin' className='form-control' { ...register('pin', { required: true, minLength: 6, maxLength: 6 })} defaultValue={ content.personal_info.pin } />

                    { errors.pin?.type === 'required' && <p className='text-danger'> *Pin is required field </p> }
                    { errors.pin?.type === 'minLength' && <p className='text-danger'> *Minimum Length is 6 digits </p> }
                    { errors.pin?.type === 'maxLength' && <p className='text-danger'> *Maximum Length is 6 digits </p> }

               </div>


               </div>
                
               

               

               <div className='d-flex justify-content-between mt-4'>

               <button  className="btn bg-info" style={{color: 'black'}}><a href='http://localhost:4000/' style={{textDecoration: 'none', color: 'black'}}>Back</a></button>


               <button type='submit' className="btn bg-warning " onClick={handleSubmit(onSubmit)} >Save</button>     {/*onClick={onClickingSave}*/}

               </div>

            </form>


            <button className='btn d-block mx-auto bg-warning' ><a href='http://localhost:4000/ExperienceForm'>Go To NextPage</a></button>

               
//                 {/* <div className='container'>
//                     <Outlet/>
//                </div>  */}
        

        </div>

    )

}

export default Forms


// function Forms() {
  
  
// const {register,handleSubmit,formState:{errors}} = useForm()
  
// let [profile,setProfile] = useState([])
  
// const onSaveNext = (profileObj)=>{

//      console.log(profileObj)

//      setProfile([...profile,profileObj])
     

// }

//  const onClickingSave=()=>{

//      alert("Data saved")
      
//  }
  
  
  
//      return (   
//        <div>

//             <p className='display-6 text-center'>Personal Info</p>

//             <p className="fst-italic" style={{paddingLeft:'120px'}}><b>Note:</b>Employers will use this information to contact you.</p>

//             <form className='container' onSubmit={handleSubmit(onSaveNext)}>


               

//                <div className="row">
               


//                {/* FirstName */}


//                <div className='mb-3 col-sm-6'>

//                <label htmlFor="FirstName">FirstName</label>
               
//                 <input type="text" id='FirstName' className='form-control' {...register('FirstName',{required:true,maxLength:15})} />

//                {/* Validating FirstName and its max length */}
               
               
//                {errors.FirstName?.type==='required'&&<p className="text-danger">* FirstName is required</p>}

//                {errors.FirstName?.type==='maxLength'&&<p className='text-danger'>* Max length is 15</p>}



//                 </div>



//                 {/* Last Name */}

//                 <div className='mb-3 col-sm-6'>

//                 <label htmlFor="LastName">LastName</label>
               
//                 <input type="text" id='LastName' className='form-control' {...register('LastName',{required:true,maxLength:15})} />

                
//                     {/* Validating LastName and its max length */}


//                 {errors.LastName?.type==='required'&&<p className="text-danger">* LastName is required</p>}

//                {errors.LastName?.type==='maxLength'&&<p className='text-danger'>* Max length is 15</p>}

                
                
//                 </div>

//                 </div>


//                 <div className='mb-3'>


//                     {/* E-mail */}

//                 <label htmlFor="email">E-mail</label>
               
//                 <input type="email" id='email' className='form-control' {...register('email',{required:true})}/>

                
//                {/* Validating Email */}

//                 {errors.email?.type==='required'&&<p className="text-danger">* Email is required</p>}
 
                
                
//                 </div>




//                 <div className="row">

                
//                     {/* Age */}


//                     <div className="mb-3 col-sm-6">

//                          <label htmlFor="age">Age</label>

//                          <input type="number" id="age" className='form-control' {...register('age')}/>


//                     </div>

//                     {/* Phone Number */}

//                     <div className="mb-3 col-sm-6">

//                          <label htmlFor="phno">Phone Number</label>

//                          <input type="number" id="phno" className='form-control' {...register('phno',{required:true,maxLength:10,minLength:10})}/>

//                          {/* Validating Phone number, its max and min length */}



//                          {errors.phno?.type==='required'&&<p className="text-danger">* Phone Number is required</p>}

//                          {errors.phno?.type==='maxLength'&&<p className='text-danger'>* Max length is 10</p>}

//                          {errors.phno?.type==='minLength'&&<p className='text-danger'>* Max length is 10</p>}


//                     </div>

//                 </div>


//                 <div className='mb-3'>

//                          <label htmlFor="address">Address</label>

//                          <input type="text" id="address" className='form-control'/>

//                 </div>






//                <div className="row">
                
//                 <div className='mb-3 col-sm-4'>

//                     <label htmlFor="city">City</label>
               
//                      <input type="text" id='city' className='form-control' />

//                 </div>

                
//                 <div className='mb-3 col-sm-4'>

//                          <label htmlFor="Country">Country</label>
               
//                          <input type="text" id='Country' className='form-control' />

//                 </div>


//                < div className='mb-3 col-sm-4'>

//                     <label htmlFor="pin">Pincode</label>     

//                     <input type="number" id='pin' className='form-control' />

//                </div>


//                </div>
                
               

               

//                <div className='d-flex justify-content-between mt-4'>

//                <button  className="btn bg-info" style={{color: 'black'}}><a href='http://localhost:3000/' style={{textDecoration: 'none', color: 'black'}}>Back</a></button>


//                <button type='submit' className="btn bg-warning " onClick={onClickingSave}>Save</button>

//                </div>
//             </form>
//             <button className='btn d-block mx-auto bg-warning'><a href='http://localhost:3000/ExperienceForm'>Go To NextPage</a></button>

               
//                 {/* <div className='container'>
//                     <Outlet/>
//                </div>  */}


          


//        </div>
//   )
// }

// export default Forms