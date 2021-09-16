import './App.css';
import data from './emojis.json';
import React, { useState } from "react";



const emojiDictionary = {
  "😊": "Smiling Face with Smiling Eyes",
  "😳": "Flushed Face",
  "😔": "Pensive Face",
  "🥡": "takeout box",
  "❤️": "Red Heart",
  "😑": "Expressionless Face" 
};

const emojis = Object.keys(emojiDictionary);

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

function emojiClickHandler(inputEmoji) {
  setMeaning(emojiDictionary[inputEmoji])
}



  return (
    <div className="App">
      
      <div class="container container-center">
        <div class="header">
          <h1 class="header-heading">Emoji interpreter </h1>
          <small className="description">Put any emoji in the input box and we will tell you what is that emoji!</small>
        </div>
        

        <input
         type="text" class="userInput"
         placeholder="Put your Emoji here!." 
         onChange = {changeHandler}
         />
         <h3>{ emoji }</h3>
         <h3>{ meaning }</h3>
        
        {
          emojis.map((emoji) => (
            <span
              onClick={() => emojiClickHandler(emoji)}
            >
              { " " }
              {emoji} { " " }
            </span>
          ))
        }

      </div>
    </div>
  );
}

export default App;
