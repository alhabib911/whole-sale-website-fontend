import React from 'react';
import useProducts from '../hooks/useProducts';
import Product from './Product';

const Products = () => {
    const [product] = useProducts();

    // console.log(product);
    return (
        <div>
            <h2 className='card-title-text'>Our Products</h2>
            <div className='card-container'>
            {
                product.map(product=> <Product
                    product={product}
                ></Product>)
            }
        </div>
        </div>
    );
};

export default Products;