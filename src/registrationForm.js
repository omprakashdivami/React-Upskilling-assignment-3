import React, { useState } from 'react'
import './App.css';
import './App.js';

const RegistrationForm = ({register}) => {
  const [data, setdata]=useState({
    name:'',
    userName:'',
    password:'',

  })
 
  return (
    <div>
      registrationForm
      <div className='form'>
        <div>Name:<input type="text" onChange={(e)=>{setdata({...data, name:e.target.value})}}></input></div>
        <div>User Name:<input type="text" onChange={(e)=>{setdata({...data, userName:e.target.value})}}></input></div>
        <div>Email Id:<input type="text" ></input></div>
        <div>Password:<input type="text" onChange={(e)=>{setdata({...data, password:e.target.value})}}></input></div>
        <div><button onSubmit={register(data)}>Register</button></div>
      </div>
    </div>
  )
}

export default RegistrationForm