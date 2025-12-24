import React from 'react';
import '../css/label.css';


function Label({text}){
    return (
        <div className="label">
        <h5>{text}</h5>
        </div>
    )
}

export default Label;