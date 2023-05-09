import { useState } from 'react';
import './App.css';
import RegForm from './RegForm';
import {LoginForm} from './loginForm';
import StatusComponent from './StatusComponent';
import UserType from './UserType';


function App() {
  const [ existingUsersArr, setExistingUsersArr ] = useState([])
  const [pageState,setpage] = useState(-1)
  const [status, setStatus] = useState(false)
  const [showStatus, setShowStatus]=useState(false)
  const [loginUserType, setLoginUserType] =useState('')
  
  function register (data){
    const ar=[...existingUsersArr, data]
    setExistingUsersArr(ar)
    console.log(existingUsersArr);
    console.log(status,'status')
    console.log(data, ':::::::::::')
  }
  function removeUser(deletedUser){
    // setExistingUsersArr(existingUsersArr.filter((item,index)=>index!==deletedUser))
  }
  return (
    <div className="App">
     <div><button onClick={() => {setpage(1)}}> Login</button></div>
     <div>new user?</div>
     <div><button onClick={() => {setpage(0)}}>Register</button></div>
     {/* <button onClick={() => {setpage(0)}}> RegForm</button>
     <button onClick={() => {setpage(1)}}> existingUsersArr</button> */}

     {  pageState==0 ?  <RegForm register={register} /> : <div> </div> }
     {  pageState==1 ?  
     <LoginForm 
     existingUsersArr={existingUsersArr} 
     setStatus={setStatus} 
     setShowStatus={setShowStatus} 
     status={status} 
     setpage={setpage} 
     setLoginUserType={setLoginUserType}
     /> : <div> </div> }

     { showStatus ? <StatusComponent  status={status} existingUsersArr={existingUsersArr} loginUserType={loginUserType} removeUser={removeUser} />  : <div></div>} 
    
    </div>
  );
}

export default App;
