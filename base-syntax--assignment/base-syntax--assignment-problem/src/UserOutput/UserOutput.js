import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
  return (
    <div className="userOutput">
      <p>{props.name}</p>
      <p>{props.lastname}</p>
    </div>
    
  
  )

};

export default userOutput;