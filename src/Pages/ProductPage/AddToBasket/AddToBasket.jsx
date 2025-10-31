
import React from 'react';
import './AddToBasket.css';

const AddToBasket = ({ onAdd }) => {
    return (
        <button onClick={onAdd} className="addtobasketbutton">
            Add to Basket
        </button>
    );
}

export default AddToBasket;