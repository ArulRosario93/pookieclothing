import React, { use, useState } from "react";
import './CreateProduct.css';
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import AddImage from "./AddImage/AddImage";
import AddInput from "./AddInput/AddInput";
import AddColours from "./AddColours/AddColours";
import AddStyles from "./AddStyles/AddStyles";
import ProductPage from "../ProductPage/ProductPage";
import ProductPreview from "./ProductPreview/ProductPreview";
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

const CreateProduct = ({ show, onClose }) => {

    const [index, setIndex] = useState(0);
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    // Image
    const [selectedImages, setSelectedImages] = useState([]);
    // file Reader
    const [fileimages, setFileImages] = useState([]);
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

    const handleChangeIndex = async () => {

        if(index == 0){
            if(selectedImages.length > 0){
                setIndex(index + 1);
                setProduct((preV) => (
                    {
                        ...preV,
                        images: Array.from(selectedImages),
                    }
                ))
                return;
            }
        }else if(index == 1){
            if (name.trim() !== '') {
                setIndex(index + 1);
                setProduct((preV) => (
                    {
                        ...preV,
                        name: name
                    }
                ))
                return;
            }
        }else if(index == 2){
            if(price.trim().length > 0){
                setIndex(index + 1);
                setProduct((preV) => (
                    {
                        ...preV,
                        price: price
                    }
                ))
                return;
            }
        }else if(index == 3){
            if(notes.trim().length > 0){
                setIndex(index + 1);
                setProduct((preV) => ({
                    ...preV, 
                    notes: notes
                }));
                return;
            }
        }else if(index == 4){
            if (colours.length > 0) {
                setIndex(index + 1);
                setProduct((preV) => ({
                    ...preV, 
                    colours: colours,
                }));
                return;
            }
        }else if(index == 5) {
            if (styles.length > 0) {
                const loadedImages = await handleChangeFileImage();
                setProduct((preV) => ({
                    ...preV, 
                    styles: styles,
                    fileimages: loadedImages,
                }));
                setIndex(index + 1);
                return;
            }
        }else if(index == 6){
            // Send data to backend
            console.log('send data to backend');

            handleSendData();
        }
    }

    
    const handleChangeFileImage = async () => {
        
        const filePromises = selectedImages.map(file => {
            return new Promise(resolve => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.readAsDataURL(file);
            });
        });

        const results = await Promise.all(filePromises);
        return results
    };

    
    const handleChangeImage = (val) => {
        setSelectedImages(Array.from(val.target.files));
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

    const handleSendData = async () => {

        setLoading(true);

       const formData = new FormData();
       formData.append('data', JSON.stringify(product));
        Array.from(selectedImages).forEach((file, idx) => {
        // Append same key for multiple files, or distinct keys if you prefer
        formData.append("images", file);
        // Alternative: formData.append(`image_${idx}`, file);
        });

        // Debug: list entries so you know entries exist
        for (const pair of formData.entries()) {
            console.log("formdata entry:", pair[0], pair[1], pair[1] instanceof File ? `(File ${pair[1].name})` : "");
        }

        try {
            const res = await axios.post("http://localhost:8888/.netlify/functions/createproduct", formData);
            console.log(res);
            setLoading(false);
            alert("Upload successful!");
        } catch (err) {
            console.error(err);
            setLoading(false);
            alert("Upload failed", err);
        }
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
                return <ProductPreview product={product} />
                
            default:
                break;
        }

    }


    return (
        <Dialog open={show} fullWidth onClose={onClose} className="CreateProduct">

            <h2 className="CreateProductHead">Create Product</h2>

            <DialogContent>

                {
                    returnWidget(index)
                }

            </DialogContent>

            <DialogActions style={{justifyContent: 'space-between'}}>
            
                
                {index > 0? <button className="CreateProductBtn" onClick={handleChangeIndexBack}>Back</button>: <div></div>}

                <button className="CreateProductBtn" onClick={loading? null :handleChangeIndex}>
                    {loading ? <CircularProgress /> :index == 5? 'Preview': 'Next'}
                </button>

            </DialogActions>

        </Dialog>
    )
}

export default CreateProduct;