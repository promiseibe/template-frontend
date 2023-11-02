import React from "react";
import { Link } from "react-router-dom";
import { shortenedText } from "../../utils";
import "./Carousel.scss";
const CasualItem = ({url, name, price, description}) => {
    return (
        <div className="carouselItem --mb2">
            <Link to="/product-details">
                <img className="product--image" src={url} alt="product"/>
                <p className="price">
                    {`${price}`}
                </p>
                <h4>{shortenedText(name, 10)}</h4>
                <p className="--mb">{shortenedText(description, 26)}</p>
            </Link>

            <button className="--btn --btn-primary --btn-block">
                Add To Cart
            </button>
        </div>
    )
}

export default CasualItem