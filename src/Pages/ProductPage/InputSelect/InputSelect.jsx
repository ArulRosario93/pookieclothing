
import React from "react";
import './InputSelect.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const InputSelect = ({ head, items, handleChange }) => {

    handleChange(items[0]);

    return (
        <div className="InputSelect">

            {/* <label htmlFor={head} hidden className="InputSelectPara"></label> */}


            <select className="InputSelectSelect" onChange={handleChange} name={head} id={head}>
                {
                    items.map((item, i) => {
                        return (
                            <option key={i} value={item} className="InputSelectSelectOption">
                                {item}
                            </option>
                        )
                    })
                }
            </select>
            {/* <KeyboardArrowDownIcon style={{ color: 'white' }} /> */}

            {/* <input type="hidden" onClick={handleClick}>
            </input> */}


        
        </div>
    )
}

export default InputSelect;