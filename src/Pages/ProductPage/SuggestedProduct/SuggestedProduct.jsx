import React from "react";
import './SuggestedProduct.css';
import ClotheContainer from "../../../Components/ClotheContainer/ClotheContainer";

const SuggestedProduct = ({ items }) => {
    return (
        <div className="SuggestedProduct">
            <h2 className="SuggestedProductHead">You might also like</h2>

            <div className="SuggestedProductContainer">
                    {
                        items.map((item, i) => {
                            return (
                                <ClotheContainer key={i} imageSrc={item.imageSrc} clotheName={item.clotheName} priceSection={item.priceSection} />
                            )
                        })
                    }
            </div>
        </div>
    )
}

export default SuggestedProduct;