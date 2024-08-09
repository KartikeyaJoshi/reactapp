import React from 'react';
export default function Alerts(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{'height': '50px'}} className='container my-3'>
    {props.heading && <center><h1>{props.heading}</h1></center>}
    {props.alert && <div className="container">
    <div className={`alert alert-${props.alert.type} shadow-lg`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>
    </div>}
    </div>
  )
}