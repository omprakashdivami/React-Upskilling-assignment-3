import React from 'react'
import { useState } from 'react'
export  const LoginForm = ({existingUsersArr, setStatus, setShowStatus,status, setpage,setLoginUserType}) => {
  
  const [loginData, setLoginData]=useState({

    
    userName:'',
    password:'',
    userType:'admin'
  })
  const checkData=(x)=>{
    // console.log(status)
    setShowStatus(true)
    setpage(-1)
    
    for(const element of existingUsersArr){
      if(element.userName===x.userName && element.password===x.password  ){
        console.log('Success');
        setStatus(true)
        // console.log(status)
        if(element.userType==='admin'){
          setLoginUserType('admin')
        }
        else{
          setLoginUserType('normal')
        }

        
        break;
      }
      // else{
      //   console.log('fail')
      //   setStatus(false)
      // }
    }
  }

  
  return (
    <div className='form'>
      LoginForm:
      
      <div>User Name:<input type="text" onChange={(e)=>{setLoginData({...loginData,  userName:e.target.value})}}></input></div>
      <div>Password:<input type="text" onChange={(e)=>{setLoginData({...loginData, password:e.target.value})}}></input></div>
      
      <div><button onClick={()=>{checkData(loginData)}}>Login</button></div>
    </div>
  )
}

// export default  LoginForm;