import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import Home from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Products } from '../pages/Products'
import { ProductsDetail } from '../pages/ProductsDetail'

export const MyRouter = () => {
  return (
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/*" element={<NotFound/>}/>
          <Route path="/shop" element={<Products/>}/>
          <Route path="/proDetail/:id" element={<ProductsDetail/>}/>          
      </Routes>
  )
}
export default MyRouter
