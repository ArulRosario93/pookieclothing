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

    const item = nav.state.item;

    const [selectedImage, setSelectedImage] = useState(0);
    const [size, setSize] = useState('');
    const [colour, setColour] = useState('');
    const [style, setStyle] = useState();

    const defaultInitalSizes = ['Small', 'Medium', 'Large', 'X-Large', 'XX-Large', 'XXX-Large'];

    const handleSize = (value) => {
        setSize(size);
    }

    const handleColour = (colour) => {
        setColour(colour);
    }

    const handleStyle = (value) => {
        setStyle(value)
    }

    const handleChangeImage = (index) => {

        setSelectedImage(index)

    }

    const handleChangeImageForward = () => {
        
        if(item?.images.length > selectedImage + 1){
            setSelectedImage(selectedImage + 1);
        }else{
            setSelectedImage(0);
        }
        
    }
    
    const handleChangeImageBackward = () => {
        if((selectedImage - 1) >= 0){
            setSelectedImage(selectedImage - 1);
        }else{
            setSelectedImage(item?.images.length - 1);
        }
    }


    return (
        <div className="ProductPage">
        
            {/* Page Navigation */}
            <div className='ProductPagePageNavigation'>

                <p className='ProductPagePageNavigationPara'>Home \ Products \ {item?.name}</p>

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

                        <img src={item?.images[selectedImage]} alt='clothe' />

                    </div>
                    <div className='ProductPageProductImagePreview'>

                        {
                            item?.images.map((image, i) => {
                                return (
                                    <div key={i} className={image == item?.images[selectedImage] ? 'ProductPageProductImagePreviewContainerSelected': 'ProductPageProductImagePreviewContainer'} onClick={() => handleChangeImage(i)}>
                                        <img src={image} alt={image} />
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>

                {/* Product Content */}

                <div className='ProductPageProductContent'>

                    <div className='ProductPageProductContentNameNPrice'>

                        <p className='ProductPageProductContentNameNPricePara'>{item?.name}</p>
                        <p className='ProductPageProductContentNameNPriceParaSmall'>{item?.price}</p>

                    </div>

                    <InputSelect handleChange={handleSize} head='Size' items={defaultInitalSizes} />
                    <InputSelect handleChange={handleColour} head='Colour' items={['Colours',...item.colours]} />
                    <InputSelect handleChange={handleStyle} head='Style' items={['Styles' ,...item.styles]}/>

                    <AddToBasket /> 

                    <AboutProduct notes={item?.notes} />

                </div>


            </div>


            {/* You might Also Like */}
            {/* <SuggestedProduct items={item.slice(0, 3)} /> */}

        </div>
    );
}

export default ProductPage;