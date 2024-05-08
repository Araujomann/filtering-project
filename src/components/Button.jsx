import React from "react";

export const Button = ({ onClickHandler, value, title }) => {
    return (
        <button
            onClick={onClickHandler}
            value={value}
            className="btns btns-recommended"
        >
            {title}
        </button>
    );
};
