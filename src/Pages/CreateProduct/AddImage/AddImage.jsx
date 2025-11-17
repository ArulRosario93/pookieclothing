import React from "react";
import './AddImage.css';

const AddImage = ({ handleChangeImage }) => {

    return (
        <div className="AddImage" onChange={handleChangeImage}>
             <input type='file' alt="file" multiple className="AddImageInp" required />
        </div>
    )
}

export default AddImage;