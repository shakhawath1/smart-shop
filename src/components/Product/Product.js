import React from 'react';
import { addToDb } from '../../utilities/fakedb';
import './Product.css';

const Product = ({ product }) => {
    const { name, price, id } = product;
    const addToCart = (id) => {
        addToDb(id);
    }
    return (
        <div className='product'>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p>Id: {id}</p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Product;