import './App.css';
import data from './emojis.json';
import React, { useState } from "react";

function App() {
const [emoji, setEmoji] = useState("");
const [meaning, setMeaning] = useState("Translation will appear heare...");

function changeHandler(event){
  const  inputEmoji = event.target.value;

  setEmoji(inputEmoji);

  if(inputEmoji in data){
    setMeaning(data[inputEmoji]);
  } else {
    setMeaning("We are failed recognise this emoji")
  }

}



  // console.log(data)
  return (
    <div className="App">
      <div class="container container-center">
        <h1 class="app-heading">Emoji interpreter </h1>

        <input
         type="text" class="userInput" 
         onChange = {changeHandler}
         />
         <h4>{ emoji }</h4>
         <h3>{ meaning }</h3>
        
      </div>
    </div>
  );
}

export default App;
