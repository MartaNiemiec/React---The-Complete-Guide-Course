import React from 'react';

const validation = (props) => {
  const style = {
    padding: "10px",
    border: "1px solid green",
    color: "green",
    width: "15%",
    textAlign: "center"
  }

let validationMessage;

props.textLength < 5 
  ? validationMessage = "Text too short" 
  : validationMessage = "Text long enough";


  return (
    <p style={style}>{ validationMessage }</p>
  )
}

export default validation;