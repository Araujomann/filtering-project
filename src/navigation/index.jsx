import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import "./style.css";
import { SwitchS } from "../components/Switch";

export const Nav = ({ handleChange, switchTheme }) => {
    return (
        <nav>
            <div className="principal-container">
                <div className="input-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="  Search..."
                        onChange={handleChange}
                    />
                    <FiSearch className="search-icon" />
                </div>
                <div className="icons-container">
                    <a href="#">
                        <FiHeart className="nav-icons" />
                    </a>
                    <a href="#">
                        <AiOutlineShoppingCart className="nav-icons" />
                    </a>
                    <a href="#">
                        <AiOutlineUserAdd className="nav-icons" />
                    </a>
                </div>
            </div>

            <SwitchS className="switch" onClick={switchTheme} />
        </nav>
    );
};
