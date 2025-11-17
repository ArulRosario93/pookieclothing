import React from "react";
import './AddColours.css';

const AddColours = ({ colour, colours, placeholder, handleChange, onSubmit }) => {
    return (
        <div className="AddColours">

            <input type="text" value={colour} onChange={handleChange} placeholder={placeholder} onKeyDown={onSubmit} />

            <div className="ColoursContainer">
                {
                    colours.map((item, i) => {
                        return (
                            <div className="ColourContainer">
                                <div className="ColourContainerInner" style={{background: item}}></div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default AddColours;