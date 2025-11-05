import React from "react";
import './Featured.css';
import ClotheContainer from "../../../Components/ClotheContainer/ClotheContainer";

const Featured = ({ items }) => {
    return (
        <div className="Featured">
            
            <h2 className="FeaturedHead">Featured</h2>
            <div className="FeaturedItems">
                
                {
                    items.map((item, index) => {
                        return <ClotheContainer
                        productID={index}
                        key={index} 
                        imageSrc={item.imageSrc} 
                        clotheName={item.clotheName} priceSection={item.priceSection} />
                    })
                }

            </div>

        </div>
    );
}

export default Featured;