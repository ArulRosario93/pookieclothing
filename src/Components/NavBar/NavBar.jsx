import React from "react";
import './NavBar.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const NavBar = () => {

    const [isClickedShop, setIsClickedShop] = React.useState(false);
    const [isClickedMore, setIsClickedMore] = React.useState(false);

    const handleClickShop = () => {
        setIsClickedMore(false);
        setIsClickedShop(!isClickedShop);
    }


    const handleClickMore = () => {
        setIsClickedShop(false);
        setIsClickedMore(!isClickedMore);
    }

    const handleClickOutside = (event) => {
        if (!event.target.closest('.NavBarSection1SubHead')) {
            setIsClickedShop(false);
            setIsClickedMore(false);
        }  
    }

    React.useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="NavBar">

            {/* Section 1 */}
            <div className="NavBarSection1">
                <h4 className="NavBarSection1SubHead" onClick={handleClickShop}>Shop <ExpandMoreIcon />
                    <div className="NavBarSection1SubHeadShop" style={{ display: isClickedShop ? "flex" : "none" }}>
                        <p className="NavBarSection1SubHeadShopPara">Clothing</p>
                        <p className="NavBarSection1SubHeadShopPara">Accessories</p>
                        <p className="NavBarSection1SubHeadShopPara">Gift Cards</p>
                    </div>
                </h4>

                <h4 className="NavBarSection1SubHead" onClick={handleClickMore}>More <ExpandMoreIcon />
                    <div className="NavBarSection1SubHeadMore" style={{ display: isClickedMore ? "flex" : "none" }}>
                        <p className="NavBarSection1SubHeadMorePara">About Us</p>
                        <p className="NavBarSection1SubHeadMorePara">Contact</p>
                        <p className="NavBarSection1SubHeadMorePara">FAQ</p>
                    </div>
                </h4>
            </div>

            <div className="NavBarSection2">
                <h1 className="NavBarSection2Head">PookieClothings</h1>
            </div>

    
            {/* Section 3 */}
            <div className="NavBarSection3">
                <div className="NavBarSection3Icon">
                    <SearchIcon style={{ fontSize: "1.8rem" }} />
                    <ShoppingCartIcon style={{ fontSize: "1.8rem" }} />
                </div>
            </div>


        </div>
    )
}

export default NavBar;