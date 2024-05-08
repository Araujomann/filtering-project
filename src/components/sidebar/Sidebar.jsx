import { Category } from "./category";
import { Price } from "./price";
import { Colors } from "./colors";
import "./index.css";

export const Sidebar = ({ handleChange }) => {
    return (
        <section className="sidebar">
            <div className="logo-container">
                <img src="assets/shoe-brand.png" className="shop-brand" />
            </div>

            <Category handleChange={handleChange} />
            <Price handleChange={handleChange} />
            <Colors handleChange={handleChange} />
        </section>
    );
};
