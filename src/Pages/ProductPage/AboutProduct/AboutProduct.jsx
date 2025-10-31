
import React from 'react';
import './AboutProduct.css';

const AboutProduct = () => {

    const AbtPro = [
        {
            head: 'Quality',
            para: 'aegaefaefaef\naaefaefaefaefaef\nefaefaefaefaefaefaefkaegfafhav ae vfh vaef aeu aevfae uaefyaef\n'
        },
        {
            head: 'Quality',
            para: 'aegaefaefaef\naaefaefaefaefaef\nefaefaefaefaefaefaefkaegfafhav ae vfh vaef aeu aevfae uaefyaef\n'
        },
    ];

    return (
        <div className='AboutProduct'>

            {
                AbtPro.map((item, i) => {
                    return (
                        <div key={i} className='AboutProductContainer'>
                            <h2 className='AboutProductContainerHead'>{item.head}</h2>
                            <p className='AboutProductContainerPara'>{item.para}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default AboutProduct;