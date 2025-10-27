
import React from "react";
import './HomePage.css';
import NavBar from "../../Components/NavBar/NavBar";
import GreetingText from "../../Components/GreetingText/GreetingText";

const HomePage = () => {
    return(
        <div className="HomePage">
            <NavBar />
            <GreetingText />
        </div>
    )
};

export default HomePage;