import React from 'react';
import './ProductPage.css';
import InputSelect from './InputSelect/InputSelect';

const ProductPage = () => {

    return (
        <div className="ProductPage">
        
            {/* Page Navigation */}
            <div className='ProductPagePageNavigation'>

                <p className='ProductPagePageNavigationPara'>Home \ Products \ Massive Blue</p>

            </div>

            <div className='ProductPageProduct'>

                {/* Product Image */}

                <div className='ProductPageProductImage'>

                    <div className='ProductPageProductImageContainer'>

                        <img src='https://assets.bigcartel.com/product_images/403181877/2e0b78e0-a113-491a-b207-4f7206b1d178.jpeg' alt='clothe' />

                    </div>
                    <div className='ProductPageProductImagePreview'>

                        <div className='ProductPageProductImagePreviewContainer'>

                        </div>

                    </div>

                </div>

                {/* Product Content */}

                <div className='ProductPageProductContent'>

                    <div className='ProductPageProductContentNameNPrice'>

                        <p className='ProductPageProductContentNameNPricePara'>Massive Black Blue</p>
                        <p className='ProductPageProductContentNameNPriceParaSmall'>GBP33.00 - 38.00</p>

                    </div>

                    <InputSelect head='Size' />
                    <InputSelect head='Colour' />
                    <InputSelect head='Style' />

                </div>

            </div>


            {/* You might Also Like */}

        </div>
    );
}

export default ProductPage;