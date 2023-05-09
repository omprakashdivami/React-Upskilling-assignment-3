import React from 'react'

const StatusComponent = ({status, existingUsersArr, loginUserType , removeUser}) => {

  console.log(status,'statusComp')
  return (
    <div>
      
       
        Users:
        <div>{ status ? <div>{existingUsersArr.map((item,index)=>{
          if(loginUserType==='admin'){
            return(
              <><p key={index}>{item.userName}</p><button  onClick={removeUser(index)}>-</button></>
              
            )
          }
          else{
            return(
              <><p key={index}>{item.userName}</p></>
              
            )
          }
         
            }
          
        )}</div> : <div>Fail</div> }</div> 
        {/* ask why the status is like an object */}
    </div>
  )
}

export default StatusComponent