import React, { useState } from 'react';
import './CartPage.css';
import ProductContainer from './ProductContainer/ProductContainer';

const CartPage = () => {

    const [count, setCount] = useState(1);

    const handleReduce = () => {
        if(count > 1){
            setCount(count - 1);
        }
    }

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleCheckout = () => {
        alert('Checkout');
    }

    return (
        <div className="CartPage">

            <h2 className='CartPageHead'>Basket</h2>

            <ProductContainer count={count} funcAdd={handleAdd} funcSub={handleReduce} />

            <div className='CartPageTotalSection'>

                <div className='CartPageTotalSectionContent'>
                    <p className='CartPageTotalSectionContentPara'>Subtotal</p>
                    <p className='CartPageTotalSectionContentPara'>GBP 35.00</p>
                </div>

                <div className='CartPageTotalSectionBtn'>
                    <button className='CartPageTotalSectionBtnBtn' onClick={handleCheckout}>
                        Checkout
                    </button>
                </div>
            </div>

        </div>
    )
}

export default CartPage;