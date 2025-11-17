import React, { use, useState } from "react";
import './CreateProduct.css';
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import AddImage from "./AddImage/AddImage";
import AddInput from "./AddInput/AddInput";
import AddColours from "./AddColours/AddColours";
import AddStyles from "./AddStyles/AddStyles";
import ProductPage from "../ProductPage/ProductPage";
import ProductPreview from "./ProductPreview/ProductPreview";

const CreateProduct = ({ show, onClose }) => {

    const [index, setIndex] = useState(0);

    // Image
    const [selectedImages, setSelectedImages] = useState([]);
    // Name
    const [name, SetName] = useState('');
    // price
    const [price, setPrice] = useState('');
    // Notes
    const [notes, setNotes] = useState('');
    // Colour
    const [colour, setColour] = useState('');
    const [colours, setColours] = useState([]);
    // style
    const [styles, setStyles] = useState([]);

    const formData = new FormData();

    const handleChangeIndexBack = () => {
        if(index > 0){
            setIndex(index - 1);
        }
    }

    const handleChangeIndex = () => {

        if(index == 0){
            if(selectedImages.length > 0){
                setIndex(index + 1);
                return;
            }
        }else if(index == 1){
            if (name.trim() !== '') {
                setIndex(index + 1);
                return;
            }
        }else if(index == 2){
            if(price.trim().length > 0){
                setIndex(index + 1);
                return;
            }
        }else if(index == 3){
            if(notes.trim().length > 0){
                setIndex(index + 1);
                return;
            }
        }else if(index == 4){
            if (colours.length > 0) {
                setIndex(index + 1);
                return;
            }
        }else if(index == 5){
            if (styles.length > 0) {
                setIndex(index + 1);
                return;
            }
        }else if(index == 6){
            // if (styles.length > 0) {
                setIndex(index + 1);
                return;
            // }
        }

        console.log(index);
    }

    const handleChangeImage = (val) => {
        setSelectedImages(val.target.files);
    }

    const handleChangeName = (e) => {
        SetName(e.target.value);
    }

    const hanldeChangePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleChangeNotes = (e) => {
        setNotes(e.target.value)
    }

    const handleChangeColours = (e) => {
        setColour(e.target.value)
    }

    const handleColourSubmit = (e) => {
        if(e.key == 'Enter'){
            setColours((preVal) => [
                ...preVal, colour
            ]);
            setColour('');
        }
    }

    const handleChangeStyles = (style) => {
        setStyles(style);
    }

    const returnWidget = (index) => {

        switch (index) {
            case 0:
                return <AddImage handleChangeImage={handleChangeImage} />
            
            case 1:
                return <AddInput value={name} handleChange={handleChangeName} placeholder='Name of the Product' />

            case 2:
                return <AddInput value={price} handleChange={hanldeChangePrice} placeholder='Price' />

            case 3:
                return <AddInput value={notes} long={true} handleChange={handleChangeNotes} placeholder='Notes' />

            case 4:
                return <AddColours colours={colours} colour={colour} onSubmit={handleColourSubmit} handleChange={handleChangeColours} placeholder='Red, Blue, Pink, Yellow' />
                
            case 5:
                return <AddStyles handleChangeStyles={handleChangeStyles}/>
            
            case 6:
                return <ProductPreview />
                
            default:
                break;
        }

    }


    return (
        <Dialog open={show} maxWidth onClose={onClose} className="CreateProduct">

            <DialogTitle>
                <h2 className="CreateProductHead">Create Product</h2>
            </DialogTitle>

            <DialogContent>

                {
                    returnWidget(index)
                }

            </DialogContent>

            <DialogActions style={{justifyContent: 'space-between'}}>
            
                
                {index > 0? <button className="CreateProductBtn" onClick={handleChangeIndexBack}>Back</button>: <div></div>}

                <button className="CreateProductBtn" onClick={handleChangeIndex}>
                    {index == 5? 'Preview': 'Next'}
                </button>

            </DialogActions>

        </Dialog>
    )
}

export default CreateProduct;