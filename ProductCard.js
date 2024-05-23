import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <h3 className="product-name">{product.name}</h3>
            <div className="product-photo">
                <img src={product.photo} alt={product.name} />
            </div>
            <p className="product-price">Price: {product.price}</p>
            <div className="product-details">
                <div className="product-detail">
                    <span>{product.mfg}</span>
                </div>
                <div className="product-detail">
                    <span>{product.remarks}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
