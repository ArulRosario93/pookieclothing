
import React from "react";
import './HomePage.css';
import NavBar from "../../Components/NavBar/NavBar";
import GreetingText from "../../Components/GreetingText/GreetingText";
import ClotheContainer from "../../Components/ClotheContainer/ClotheContainer";
import Featured from "./Featured/Featured";

const HomePage = () => {

    const items = [
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/393025512/546792bc-3af4-4cf3-b8c0-77468f5f0b8a.jpg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/412610220/7fc0dfd8-e2a9-44bf-8bea-7f12d8e23174.jpeg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'WITCH WOMAN',
            imageSrc: 'https://assets.bigcartel.com/product_images/409012752/e736d14b-db3d-4404-bea7-d44635299b6d.jpeg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/393025512/546792bc-3af4-4cf3-b8c0-77468f5f0b8a.jpg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/412610220/7fc0dfd8-e2a9-44bf-8bea-7f12d8e23174.jpeg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'WITCH WOMAN',
            imageSrc: 'https://assets.bigcartel.com/product_images/409012752/e736d14b-db3d-4404-bea7-d44635299b6d.jpeg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/393025512/546792bc-3af4-4cf3-b8c0-77468f5f0b8a.jpg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/412610220/7fc0dfd8-e2a9-44bf-8bea-7f12d8e23174.jpeg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'WITCH WOMAN',
            imageSrc: 'https://assets.bigcartel.com/product_images/409012752/e736d14b-db3d-4404-bea7-d44635299b6d.jpeg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/393025512/546792bc-3af4-4cf3-b8c0-77468f5f0b8a.jpg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/412610220/7fc0dfd8-e2a9-44bf-8bea-7f12d8e23174.jpeg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'WITCH WOMAN',
            imageSrc: 'https://assets.bigcartel.com/product_images/409012752/e736d14b-db3d-4404-bea7-d44635299b6d.jpeg',
            priceSection: '22 USD',
        },
    ]

    return(
        <div className="HomePage">
            <NavBar />
            <GreetingText />
            <Featured items={items} />
        </div>
    )
};

export default HomePage;