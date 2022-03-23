import React, { useEffect, useState } from 'react';
import { getTotal } from '../../utilities/calculate';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const total = getTotal(products)

    return (
        <div>
            <h1>Wellcome to Cosmetics store</h1>
            <h4>Total: {total} </h4>
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;