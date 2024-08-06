import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState();
    const handleOnChange = (event) => {
        let newText = event.target.value.toUpperCase();
        setText(newText);
    }
  return (
    <>
    <div className="container">
    <div className="mb-3 pt-2">
    <center><h1>{props.heading}</h1></center>
    <textarea className="form-control" id="textBox" rows="5" placeholder="Enter Text" onChange={handleOnChange} value={text}></textarea>
    </div>
    </div>
    </>
  )
}