
import React from 'react';
import './AboutProduct.css';

const AboutProduct = ({notes}) => {


    return (
        <div className='AboutProduct'>

            <div className='AboutProductContainer'>
                {/* <h2 className='AboutProductContainerHead'>{item.head}</h2> */}
                <p className='AboutProductContainerPara'>{notes}</p>
            </div>

        </div>
    )
}

export default AboutProduct;