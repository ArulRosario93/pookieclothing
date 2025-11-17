import React from 'react';
import './ProductPreview';

const ProductPreview = () => {
    return (
        <div className="ProductPreview">

            {/* Product Image */}

                <div className='ProductPageProductImage'>

                    {/* Product Arrows */}

                    <div className='ProductPageProductImageContainer'>
                        <div className='ProductPageProductArrows'>

                            <div className='ProductPageProductArrowsContainer' onClick={handleChangeImageBackward}>
                                <ArrowBackIosIcon style={{color: 'white'}} />
                            </div>

                            <div className='ProductPageProductArrowsContainer' onClick={handleChangeImageForward}>
                                <ArrowForwardIosIcon style={{color: 'white'}} />
                            </div>

                        </div>

                        <img src={data[selectedImage].image} alt='clothe' />

                    </div>
                    <div className='ProductPageProductImagePreview'>

                        {
                            data.map((item, i) => {
                                return (
                                    <div key={i} className={item.image == data[selectedImage].image ? 'ProductPageProductImagePreviewContainerSelected': 'ProductPageProductImagePreviewContainer'} onClick={() => handleChangeImage(i)}>
                                        <img src={item.image} alt={item.image} />
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>

                {/* Product Content */}

                <div className='ProductPageProductContent'>

                    <div className='ProductPageProductContentNameNPrice'>

                        <p className='ProductPageProductContentNameNPricePara'>{items[0].clotheName}</p>
                        <p className='ProductPageProductContentNameNPriceParaSmall'>{items[0].priceSection}</p>

                    </div>

                    <InputSelect head='Size' />
                    <InputSelect head='Colour' />
                    <InputSelect head='Style' />

                    <AddToBasket /> 

                    <AboutProduct />

                </div>

        </div>
    )
}

export default ProductPreview;