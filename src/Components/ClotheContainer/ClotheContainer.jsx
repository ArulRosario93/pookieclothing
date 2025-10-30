import React from "react";
import './ClotheContainer.css';

const ClotheContainer = ({imageSrc, clotheName, priceSection}) => {
    return (
        <div className="ClotheContainer">
            
            {/* image */}
            <div className="ClotheContainerImage">
                <img src={imageSrc} alt="Clothing Item" />
            </div>
            {/* Content */}
            <div className="ClotheContainerContent">

                <p className="ClotheContainerContentName">{clotheName}</p>
                <p className="ClotheContainerContentPrice">{priceSection}</p>

            </div>
        </div>
    );
}

export default ClotheContainer;