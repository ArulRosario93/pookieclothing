
import React from "react";
import './InputSelect.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const InputSelect = ({ head }) => {

    const handleClick = () => {
        console.log("Clicked");
    }

    return (
        <div className="InputSelect">

            <p className="InputSelectPara">{head}</p>
            
            <KeyboardArrowDownIcon style={{ color: 'white' }} />

            {/* <input type="hidden" onClick={handleClick}>
            </input> */}

        </div>
    )
}

export default InputSelect;