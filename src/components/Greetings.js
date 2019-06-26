import React from 'react'

const Greeting = ({firstName, city}) => {
  //console.log(props)
 return (
<h3>Hello, {firstName} from {city}</h3>
 )
}
export default Greeting