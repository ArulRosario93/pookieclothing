import React, { useEffect } from 'react';
import './ProductPage.css';
import InputSelect from './InputSelect/InputSelect';
import AddToBasket from './AddToBasket/AddToBasket';
import AboutProduct from './AboutProduct/AboutProduct';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import SuggestedProduct from './SuggestedProduct/SuggestedProduct';

const ProductPage = () => {

    const [selectedImage, setSelectedImage] = useState(0);

    const items = [
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/393025512/546792bc-3af4-4cf3-b8c0-77468f5f0b8a.jpg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/412610220/7fc0dfd8-e2a9-44bf-8bea-7f12d8e23174.jpeg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'WITCH WOMAN',
            imageSrc: 'https://assets.bigcartel.com/product_images/409012752/e736d14b-db3d-4404-bea7-d44635299b6d.jpeg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/393025512/546792bc-3af4-4cf3-b8c0-77468f5f0b8a.jpg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/412610220/7fc0dfd8-e2a9-44bf-8bea-7f12d8e23174.jpeg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'WITCH WOMAN',
            imageSrc: 'https://assets.bigcartel.com/product_images/409012752/e736d14b-db3d-4404-bea7-d44635299b6d.jpeg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/393025512/546792bc-3af4-4cf3-b8c0-77468f5f0b8a.jpg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/412610220/7fc0dfd8-e2a9-44bf-8bea-7f12d8e23174.jpeg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'WITCH WOMAN',
            imageSrc: 'https://assets.bigcartel.com/product_images/409012752/e736d14b-db3d-4404-bea7-d44635299b6d.jpeg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/393025512/546792bc-3af4-4cf3-b8c0-77468f5f0b8a.jpg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/412610220/7fc0dfd8-e2a9-44bf-8bea-7f12d8e23174.jpeg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'WITCH WOMAN',
            imageSrc: 'https://assets.bigcartel.com/product_images/409012752/e736d14b-db3d-4404-bea7-d44635299b6d.jpeg',
            priceSection: '22 USD',
        },
    ]

    const data = [
        {
            image: 'https://assets.bigcartel.com/product_images/403181877/2e0b78e0-a113-491a-b207-4f7206b1d178.jpeg',
        },
        {
            image: 'https://assets.bigcartel.com/product_images/413044122/6fc8faac-c8d8-4770-8e2e-27b687b27af9.webp',
        }
    ];

    const handleChangeImage = (index) => {

        setSelectedImage(index)

    }

    const handleChangeImageForward = () => {
        
        if(data.length > selectedImage + 1){
            setSelectedImage(selectedImage + 1);
        }else{
            setSelectedImage(0);
        }
        
    }
    
    const handleChangeImageBackward = () => {
        if((selectedImage - 1) >= 0){
            setSelectedImage(selectedImage - 1);
        }else{
            console.log(data.length - 1);
            setSelectedImage(data.length - 1);
        }
    }


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
                        <SuggestedProduct items={items.slice(0, 3)} />

        </div>
    );
}

export default ProductPage;