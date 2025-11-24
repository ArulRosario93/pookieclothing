import React from "react";

const ProductContainer = ({ count, funcAdd, funcSub }) => {
    return (
        
            <div className='CartPageProducts'>

                <div className='CartPageProductsLeft'>
                    <div className='CartPageProductsLeftImg'>
                        <img src='https://media.istockphoto.com/id/488160041/photo/mens-shirt.jpg?s=612x612&w=0&k=20&c=xVZjKAUJecIpYc_fKRz_EB8HuRmXCOOPOtZ-ST6eFvQ=' alt='' />
                    </div>

                    <div className='CartPageProductLeftContent'>

                        <div className='CartPageProductLeftContentName'>

                            <p className='CartPageProductLeftContentNamePara'>Gold OverSized</p>

                        </div>

                        <div className='CartPageProductLeftContentTypes'>
                            <p className='CartPageProductsLeftContentPara'>Large /</p>
                            <p className='CartPageProductsLeftContentPara'>Gold /</p>
                            <p className='CartPageProductsLeftContentPara'>Oversized</p>
                            <p className='CartPageProductsLeftContentPara'>- GBP 35.00</p>
                        </div>
                    </div>
                </div>

                <div className='CartPageProductsRight'>
                    <div className='CartPageProductsRightAddAndRemove'>
                        <div className='CartPageProductsRightAddAndRemoveBtns'>
                            <p className='CartPageProductsRightAddAndRemoveBtnsSub' onClick={funcSub}>-</p>
                            <p className='CartPageProductsRightAddAndRemoveBtnsCount'>{count}</p>
                            <p className='CartPageProductsRightAddAndRemoveBtnsAdd' onClick={funcAdd}>+</p>
                        </div>
                        <div className='CartPageProductsRightAddAndRemoveRemoveBtn'>
                            <p>Remove</p>
                        </div>
                    </div>
                    <div className='CartPageProductsRightPrice'>
                        <p>GBP 35.00</p>
                    </div>
                </div>

            </div>

    )
}

export default ProductContainer;