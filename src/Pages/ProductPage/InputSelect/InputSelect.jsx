
import React from "react";
import './InputSelect.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const InputSelect = ({ head }) => {

    const handleClick = () => {
        console.log("Clicked");
    }

    return (
        <div className="InputSelect">

            {/* <label htmlFor={head} hidden className="InputSelectPara"></label> */}


            <select className="InputSelectSelect" name={head} id={head}>
                <option>{head}</option>
            </select>
            {/* <KeyboardArrowDownIcon style={{ color: 'white' }} /> */}

            {/* <input type="hidden" onClick={handleClick}>
            </input> */}


        
        </div>
    )
}

export default InputSelect;