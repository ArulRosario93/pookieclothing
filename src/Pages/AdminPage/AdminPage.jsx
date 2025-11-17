import React, { useState } from 'react';
import { Fade } from '@mui/material';
import { ArrowRight } from '@mui/icons-material';
import './AdminPage.css';
import CheckReports from '../CheckReports/CheckReports';
import CreateProduct from '../CreateProduct/CreateProduct';

const AdminPage = () => {

    const [btn1, setBtn1] = useState(false);
    const [btn2, setBtn2] = useState(false);

    const [createProduct, setCreateProduct] = useState(false);
    const [checkReports, setCheckReports] = useState(false);

    const handleMouseHover1 = () => {
        setBtn1(true);
    }
    const handleMouseHover2 = () => {
        setBtn2(true);
    }

    const handleMouseHoverOut1 = () => {
        setBtn1(false);
    }
    const handleMouseHoverOut2 = () => {
        setBtn2(false);
    }

    const handleClickbtn1 = () => {
        setCreateProduct(true)
    }

    const handleClickbtn2 = () => {
        setCheckReports(true)
    }

    const handleClose = () => {
        setCheckReports(false);
        setCreateProduct(false);
    }

    return (
        <div className='AdminPage'>

                <h1 className='AdminPageHead'>Admin Page</h1>
                <div className='AdminPageContent'>
                    <p className='AdminPageContentPara'>Wassup?</p>
                    <div className='AdminPageContentBtns'>
                        <div className='AdminPageContentBtns1' onClick={handleClickbtn1} onMouseEnter={handleMouseHover1} onMouseLeave={handleMouseHoverOut1}>
                            <ArrowRight style={{ opacity: btn1? '1': '0', width: btn1? '40px': '0px', transition: 'all .5s' }}/>
                            Create Product
                        </div>
                        <div className='AdminPageContentBtns2' onMouseEnter={handleMouseHover2} onClick={handleClickbtn2} onMouseLeave={handleMouseHoverOut2}>
                            <ArrowRight style={{ opacity: btn2? '1': '0', width: btn2? '40px': '0px', transition: 'all .5s' }}/>
                            Check Reports
                        </div>
                    </div>
                </div>

                { createProduct ? <CreateProduct show={createProduct} onClose={handleClose} />: null }
                { checkReports ? <CheckReports show={checkReports} onClose={handleClose} /> : null }

        </div>
    )
}

export default AdminPage;