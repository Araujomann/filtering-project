import React from "react";
import "./style.css";
import { Input } from "../../Input";

export const Colors = ({ handleChange }) => {
    return (
        <div className="colors-div">
            <h2 className="sidebar-title ">Colors</h2>
            <label className="sidebar-label-container">
                <input
                    type="radio"
                    onChange={handleChange}
                    value=""
                    name="test2"
                />
                <span className="checkmark all"></span>All
            </label>

            <Input
                handleChange={handleChange}
                value="black"
                title="Black"
                name="test1"
                color="black"
            />
            <Input
                handleChange={handleChange}
                value="blue"
                title="Blue"
                name="test1"
                color="blue"
            />
            <Input
                handleChange={handleChange}
                value="red"
                title="Red"
                name="test1"
                color="red"
            />
            <Input
                handleChange={handleChange}
                value=" green"
                title=" Green"
                name="test1"
                color=" green"
            />
            <Input
                handleChange={handleChange}
                value=" white"
                title=" White"
                name="test1"
                color=" white"
            />

           
        </div>
    );
};
