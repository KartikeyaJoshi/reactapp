import React, { useState } from 'react';
export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleOnChange = (event) => {
        let newText = event.target.value.toUpperCase();
        setText(newText);
        if (text.length > 20) {
            setText(event.target.value.slice(0, -2))
            props.showAlert(`Max ${text.length - 1} characters are allowed`, "warning");
        }
    }
  return (
    <>
    <div className="container">
    <div className="mb-3 pt-2">
    <textarea className="form-control" id="textBox" rows="5" placeholder="Enter Text" onChange={handleOnChange} value={text}></textarea>
    <p>Words: {text.split(/\s+/).filter((elem) => {return elem.length!==0}).length}<br />Characters: {text.length}</p>
    </div>
    </div>
    </>
  )
}