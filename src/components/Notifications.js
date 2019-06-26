import React from 'react'
const Notifications = ({message, status}) => {
  console.log(message)
  console.log(status)
  let color = "alert box" +status;
 return (
   <div>
      <div className={color} role="alert" >Hello {message} {status}</div>
  </div>
 )
}
export default Notifications