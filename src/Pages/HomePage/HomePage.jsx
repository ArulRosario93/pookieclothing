
import React, { useEffect } from "react";
import './HomePage.css';
import GreetingText from "../../Components/GreetingText/GreetingText";
import Featured from "./Featured/Featured";

const HomePage = () => {

    const [items, setItems] = React.useState([]);

    // const item = {
    //     name: 'Arul Rosario SuperSized',
    //     price: '30 usd',
    //     images: [
    //         'https://jednorth.com/cdn/shop/files/DSC09128_1800x1800.jpg',
    //         'https://thelazytshirtcompany.com/cdn/shop/files/41_LeftPocket.png'
    //     ],
    //     notes: '',
    //     style: [
    //         'Oversized',
    //         'Sweatshirt'
    //     ],
    // };

    useEffect(() => {

        fetch('https://pookiewears-server.netlify.app//.netlify/functions/getproducts')
        .then(response => response.json())
        .then(data => {
            console.log('wassup ', data);
            setItems(data.message);
        })
        .catch(error => {
            console.error('Error fetching data ena da nadakudhu', error.message.toString());
        });
    }, []);

    return(
        <div className="HomePage">
            {/* <NavBar /> */}
            <GreetingText />
            <Featured items={items} />
        </div>
    )
};

export default HomePage;