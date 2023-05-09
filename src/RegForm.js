import React from 'react'
import { useState } from 'react'
const RegForm = ({register}) => {
    const [data, setdata]=useState({
     
        userName:'',
        password:'',
        userType:'admin'
        
      })
  return (
    <div>
      registrationForm
      <div className='form'>
        <label>choose type : </label>
        <div><select  onChange={(e)=>{setdata({...data,userType:e.target.value})}}>
          <option value='admin'>Admin</option>
          <option value='normal'>Normal</option>
        </select></div>
        <div>Name:<input type="text"></input></div>
        <div>User Name:<input type="text" onChange={(e)=>{setdata({...data, userName:e.target.value})}}></input></div>
        <div>Email Id:<input type="text" ></input></div>
        <div>Password:<input type="text" onChange={(e)=>{setdata({...data, password:e.target.value})}}></input></div>
        <div><button onClick={()=>register(data)}>Register</button></div>
      </div>
    </div>
  )
}

export default RegForm