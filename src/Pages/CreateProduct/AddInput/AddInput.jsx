import React from "react";
import './AddInput.css';

const AddInput = ({ handleChange, value, placeholder, long }) => {
    return (
        <div className="AddInput">
        {
            long ? <textarea className="input" onChange={handleChange} placeholder={placeholder} value={value} /> 
            : <input className="input" type='text' onChange={handleChange} required value={value} placeholder={placeholder} />
        }
        </div>
    )
}

export default AddInput;