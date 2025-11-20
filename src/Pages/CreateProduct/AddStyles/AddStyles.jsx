import React, { useEffect } from "react";
import './AddStyles.css';

const AddStyles = ({ handleChangeStyles }) => {

    var initialStyles = [];

    const handleChange = (e) => {

        if(e.target.checked){

            if(!initialStyles?.includes(e.target.value)){
                initialStyles?.push(e.target.value);
            }

        }else{

            if(initialStyles?.includes(e.target.value)){
                initialStyles = initialStyles.filter((item) => item != e.target.value);
            }

        }

        handleChangeStyles(initialStyles);
    }

    useEffect(() => {
        handleChangeStyles(initialStyles);
    }, [initialStyles]);

    return (
        <div className="AddStyles">
            <div className="AddStlyesContainer">
                <input name="select" type='checkbox' onChange={handleChange} value='Oversized'/>
                <label htmlFor="select">OverSized</label>
            </div>
            <div className="AddStlyesContainer">
                <input name="selectA" type='checkbox' onChange={handleChange} value='Sweatshirt'/>
                <label htmlFor="selectA">Sweatshirt</label>
            </div>
        </div>
    )
}

export default AddStyles;