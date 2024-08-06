import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleOnChange = (event) => {
        let newText = event.target.value.toUpperCase();
        setText(newText);
        if (text.length > 20) {
            setText(event.target.value.slice(0, -2))
            alert("Max allowed characters are "+ (text.length-1));
        }
    }
  return (
    <>
    <div className="container">
    <div className="mb-3 pt-2">
    <center><h1>{props.heading}</h1></center>
    <textarea className="form-control" id="textBox" rows="5" placeholder="Enter Text" onChange={handleOnChange} value={text}></textarea>
    <p>Words: {text.split(" ").length}<br />Characters: {text.length}</p>
    </div>
    </div>
    </>
  )
}