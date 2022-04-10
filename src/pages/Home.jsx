import React, { useEffect, useState } from 'react'
import { ProductList } from '../components/product-list/ProductList'
import { Slider } from '../components/slider/Slider'

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const getProductList = () => {
      fetch("/api/products/").
        then(c => c.json()).
        then(c => {
          setProducts(c);
          setLoading(true)
        });
    };
    getProductList()

  }, [])
  return (
    <div>

      <Slider perView={3} />
      <ProductList loading={loading} data={products} />

    </div>
  );
};

export default Home