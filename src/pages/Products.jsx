import React, { useEffect, useState } from 'react'
import { ProductList } from '../components/product-list/ProductList'

export const Products = () => {
    const [products, setProducts] = useState([])
    const [searchText, setsearchText] = useState("")
    const [filteredProducts, setfilteredProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getProductList = () => {
            fetch("https://fakestoreapi.com/products").
                then(c => c.json()).
                then(c => {
                    setProducts(c);
                    setLoading(true)
                });
                    console.log("salam")
        };
        getProductList()

    }, []);
    const submitHandle = (e) => {
        e.preventDefault()
        let productsNew = products.filter(c => c.title.toLowerCase().includes(searchText.toLowerCase()));
        setfilteredProducts(productsNew)
        console.log(filteredProducts)
    }
    return (
        <div className="container">
            <div className='search-input'>
                <form onSubmit={submitHandle}>
                    <div className="input-group mb-3">
                        <input type="text" 
                         className="form-control mt-3"
                          placeholder="Search"                        
                            aria-describedby="basic-addon2"
                            value={searchText}
                            onChange={e=>setsearchText(e.target.value)}
                          />
                        <span className="input-group-text mt-3" id="basic-addon2">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </span>

                    </div>
                </form>

            </div>
            <ProductList loading={loading} data={filteredProducts.length>0?filteredProducts : products} />
        </div>

    )
}
