import { Sidebar } from "./components/sidebar/Sidebar";
import { Nav } from "./navigation";
import { Products } from "./products";
import { Recommended } from "./recommended";
import "./index.css";
import { products } from "./db/data";
import { Card } from "./components/Card";
import { useState } from "react";
import { Footer } from "./footer";

//

export const App = () => {
    const darkMode = () => {
        document.body.classList.toggle("dark");
        document.querySelectorAll(".shop-brand").forEach((element) => {
            element.classList.toggle("invert");
        });
    };

    const [selectedCategory, setSelectedCategory] = useState(null);

    //--------- input filter -----------
    const [query, setQuery] = useState("");
    const handleInputChange = (e) => setQuery(e.target.value);

    const filteredItems = products.filter(
        (product) =>
            product.title
                .toLocaleLowerCase()
                .indexOf(query.toLocaleLowerCase()) !== -1
    );

    //--------- radio filter ------------
    const handleChange = (e) => setSelectedCategory(e.target.value);

    //---------Recommended buttons filter ------------
    const handleClick = (e) => setSelectedCategory(e.target.value);

    const filteredData = (products, selected, query) => {
        let filteredProducts = products;

        //---- Filtering Input Items ----
        if (query) {
            filteredProducts = filteredItems;
        }

        //----- Selected filter ----
        if (selected) {
            filteredProducts = filteredProducts.filter(
                ({ category, color, company, newPrice, title }) =>
                    category === selected ||
                    color === selected ||
                    company === selected ||
                    newPrice === selected ||
                    title === selected
            );
        }

        return filteredProducts.map(
            ({ img, title, star, reviews, newPrice, prevPrice }) => (
                <Card
                    key={Math.random()}
                    img={img}
                    title={title}
                    star={star}
                    reviews={reviews}
                    prevPrice={prevPrice}
                    newPrice={newPrice}
                />
            )
        );
    };

    const result = filteredData(products, selectedCategory, query);

    return (
        <>
            <main>
                <Sidebar handleChange={handleChange} />
                <Nav handleChange={handleInputChange} switchTheme={darkMode} />
                <Recommended handleClick={handleClick} />
                <Products result={result} />
            </main>

            <Footer acronym="CAP" phrase="Free forever." />
        </>
    );
};
