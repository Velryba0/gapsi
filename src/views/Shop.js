import React from 'react';

import ProductCard from '../components/ProductCard';

import useGetProductsHook from '../hooks/useGetProductsHook';

const Shop = () => {

    const [result, loading] = useGetProductsHook()
    return ( 
        <div>
            {result.map((product, idx) => (
            <ProductCard 
            key={idx} 
            name={product.name}
            description={product.description}
            price={product.price}
            loading={loading}
            count={idx}/>
            ))}
        </div>
     );
}
 
export default Shop;