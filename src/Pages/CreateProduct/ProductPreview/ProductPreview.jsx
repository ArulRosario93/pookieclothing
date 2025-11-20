import React, { useState } from 'react';
import './ProductPreview.css';
import InputSelect from '../../ProductPage/InputSelect/InputSelect';
import AboutProduct from '../../ProductPage/AboutProduct/AboutProduct';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useLocation } from 'react-router-dom';


const ProductPreview = ({ product }) => {

    
    const [selectedImage, setSelectedImage] = useState(0);
    
    const [colour, setColours] = useState('');
    const [size, setSize] = useState('');
    const [style, setStyle] = useState('');

    const defaultInitalSizes = ['Small', 'Medium', 'Large', 'X-Large', 'XX-Large', 'XXX-Large'];

    const handleChangeImage = (index) => {

        setSelectedImage(index)

    }

    const handleChangeImageForward = () => {
        
        if(product.fileimages.length > selectedImage + 1){
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


    const handleSize = (value) => {
        setSize(value);
    }

    const handleColours = (value) => {
        setColours(value)
    }

    const handleStyles = (value) => {
        setStyle(value)
    }

    return (
        <div className="ProductPreview">

            {/* Product Image */}

                <div className='ProductPreviewProductImage'>

                    {/* Product Arrows */}

                    <div className='ProductPreviewProductImageContainer'>
                        <div className='ProductPreviewProductArrows'>

                            <div className='ProductPreviewProductArrowsContainer' onClick={handleChangeImageBackward}>
                                <ArrowBackIosIcon style={{color: 'white'}} />
                            </div>

                            <div className='ProductPreviewProductArrowsContainer' onClick={handleChangeImageForward}>
                                <ArrowForwardIosIcon style={{color: 'white'}} />
                            </div>

                        </div>

                        <img src={product.fileimages[selectedImage]} alt='clothe' />

                    </div>
                    <div className='ProductPreviewProductImagePreview'>

                        {
                            product.fileimages.map((item, i) => {
                                return (
                                    <div key={i} className={item == product.fileimages[selectedImage] ? 'ProductPreviewProductImagePreviewContainerSelected': 'ProductPreviewProductImagePreviewContainer'} onClick={() => handleChangeImage(i)}>
                                        <img src={item} alt={item} />
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>

                {/* Product Content */}

                <div className='ProductPreviewProductContent'>

                    <div className='ProductPreviewProductContentNameNPrice'>

                        <p className='ProductPreviewProductContentNameNPricePara'>{product.name}</p>
                        <p className='ProductPreviewProductContentNameNPriceParaSmall'>{product.price}</p>

                    </div>

                    <InputSelect items={defaultInitalSizes} handleChange={handleSize} head='Size' />
                    <InputSelect head='Colour' items={product.colours} handleChange={handleColours} />
                    <InputSelect head='Style' items={product.styles} handleChange={handleStyles} />

                    <AboutProduct />

                </div>

        </div>
    )
}

export default ProductPreview;