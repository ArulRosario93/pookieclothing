import React, { useEffect } from 'react';
import './ProductPage.css';
import InputSelect from './InputSelect/InputSelect';
import AddToBasket from './AddToBasket/AddToBasket';
import AboutProduct from './AboutProduct/AboutProduct';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';

const ProductPage = () => {

    const [selectedImage, setSelectedImage] = useState('');

    const data = [
        {
            image: 'https://assets.bigcartel.com/product_images/403181877/2e0b78e0-a113-491a-b207-4f7206b1d178.jpeg',
        },
        {
            image: 'https://assets.bigcartel.com/product_images/413044122/6fc8faac-c8d8-4770-8e2e-27b687b27af9.webp'
        }
    ];

    const handleChangeImage = (img) => {

        setSelectedImage(img)

    }

    useEffect(() => {

        setSelectedImage(data[0].image);

        }, []
    );

    return (
        <div className="ProductPage">
        
            {/* Page Navigation */}
            <div className='ProductPagePageNavigation'>

                <p className='ProductPagePageNavigationPara'>Home \ Products \ Massive Blue</p>

            </div>

            <div className='ProductPageProduct'>



                {/* Product Image */}

                <div className='ProductPageProductImage'>

                    {/* Product Arrows */}

                    <div className='ProductPageProductImageContainer'>
                        <div className='ProductPageProductArrows'>

                            <div className='ProductPageProductArrowsContainer'>
                                <ArrowBackIosIcon style={{color: 'white'}} />
                            </div>

                            <div className='ProductPageProductArrowsContainer'>
                                <ArrowForwardIosIcon style={{color: 'white'}} />
                            </div>

                        </div>

                        <img src={selectedImage} alt='clothe' />

                    </div>
                    <div className='ProductPageProductImagePreview'>

                        {
                            data.map((item, i) => {
                                return (
                                    <div key={i} className={item.image == selectedImage ? 'ProductPageProductImagePreviewContainerSelected': 'ProductPageProductImagePreviewContainer'} onClick={() => handleChangeImage(item.image)}>
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

                        <p className='ProductPageProductContentNameNPricePara'>Massive Black Blue</p>
                        <p className='ProductPageProductContentNameNPriceParaSmall'>GBP33.00 - 38.00</p>

                    </div>

                    <InputSelect head='Size' />
                    <InputSelect head='Colour' />
                    <InputSelect head='Style' />
                    
                    <AddToBasket />

                    <AboutProduct />

                </div>

            </div>


            {/* You might Also Like */}

        </div>
    );
}

export default ProductPage;