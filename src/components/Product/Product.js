import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import './Product.css';

const Product = ({ product }) => {
    const { name, price, id } = product;
    const addToCart = (id) => {
        addToDb(id);
    }
    const removeFromCart = id => {
        removeFromDb(id);
    }
    return (
        <div className='product'>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p>Id: {id}</p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Product;