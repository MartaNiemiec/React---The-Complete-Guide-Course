import React from 'react';
import './UserInput.css'

const userInput = (props) => {
  const style = {
    transform:'translateX(50%)',
    margin: '30px auto'
  };

  return (
    <div style={style}>
      <input className="userInput" onChange={props.changed} type="text" value={props.name}/>
    </div>
  
  )

};

export default userInput;