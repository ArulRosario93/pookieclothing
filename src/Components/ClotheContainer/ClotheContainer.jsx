import React from "react";
import './ClotheContainer.css';
import { Navigate, useNavigate } from "react-router-dom";

const ClotheContainer = ({imageSrc, item, clotheName, priceSection, productID}) => {

    const nav = useNavigate();

    const handleClick = () => {
        nav('/product', {
            state: {
                productID,
                item
            }
        });
        window.scrollTo(0, 0)
    }

    return (
        <div className="ClotheContainer" onClick={handleClick}>
            
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