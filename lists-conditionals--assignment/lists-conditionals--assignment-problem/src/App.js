import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {

  state = {
    inputValue: "",
    inputLength: 0
  }

  checkLenghtHandler = (event) => {
    let inputVal = event.target.value;
    let inputLen = inputVal.length;
    this.setState({
      inputValue: inputVal,
      inputLength: inputLen
    })
  }

  getLettersArray = () => {
    let lettersArray = this.state.inputValue.split('');
    return lettersArray;
  }
  
  deleteLetterHandler = (indexLetter) => {
    let leterrsArr = [...this.getLettersArray()];
    leterrsArr.splice(indexLetter, 1);
    this.setState({
      inputValue: leterrsArr.join(''),
      inputLength: leterrsArr.join('').length})
  }
  
  render() {
    let charList = (
      <div>
        {this.getLettersArray().map((letter, index) => {
          return <Char 
            letter={letter} 
            key={index} 
            click={() => this.deleteLetterHandler(index)}/>
        })}
      </div>
    )

    

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr/><br/>
        <input 
          onChange={this.checkLenghtHandler} 
          type="text" 
          value={this.state.inputValue}/>
        <p><span className="bold">Text inputed:</span> {this.state.inputValue}</p>
        <p><span className="bold">Text length:</span> {this.state.inputLength}</p>
        <Validation textLength={this.state.inputLength} />
        {charList}
      </div>
    );
  }
}

export default App;
