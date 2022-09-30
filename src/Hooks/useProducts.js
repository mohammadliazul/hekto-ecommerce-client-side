import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://hekto-ecommerce-server-side.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products]);

    // return necessary things
    return [products, setProducts];
};

export default useProducts;