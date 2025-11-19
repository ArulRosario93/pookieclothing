import React, { useEffect } from 'react';
import './ProductPage.css';
import InputSelect from './InputSelect/InputSelect';
import AddToBasket from './AddToBasket/AddToBasket';
import AboutProduct from './AboutProduct/AboutProduct';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import SuggestedProduct from './SuggestedProduct/SuggestedProduct';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductPage = () => {

    const nav = useLocation();

    console.log(nav.state);

    const [selectedImage, setSelectedImage] = useState(0);

    const items = [
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/393025512/546792bc-3af4-4cf3-b8c0-77468f5f0b8a.jpg',
            priceSection: '22 USD',
            colours: ['red', 'green'],
            styles: ['Oversized', 'Sweatshirt'],
        },
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/393025512/546792bc-3af4-4cf3-b8c0-77468f5f0b8a.jpg',
            priceSection: '22 USD',
            colours: ['red', 'green'],
            styles: ['Oversized', 'Sweatshirt'],
        },
    ]

    const data = [
        {
            image: 'https://assets.bigcartel.com/product_images/403181877/2e0b78e0-a113-491a-b207-4f7206b1d178.jpeg',
        },
        {
            image: 'https://images.threadsmagazine.com/app/uploads/5139/13/11124242/131-turn-of-cloth-01.jpg',
        }
    ];

    const defaultInitalSizes = ['Small', 'Medium', 'Large', 'X-Large', 'XX-Large', 'XXX-Large'];

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

                <p className='ProductPagePageNavigationPara'>Home \ Products \ {items[0].clotheName}</p>

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
                                        <img src={item} alt={item} />
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

                    <InputSelect head='Size' items={defaultInitalSizes} />
                    <InputSelect head='Colour' items={['Colours',...items.colours]} />
                    <InputSelect head='Style' items={['Styles' ,...items.styles]}/>

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