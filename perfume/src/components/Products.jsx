import React from 'react'
import { products } from "../data";
import Product from './Product';
import '../components/Style.css';

const Products = () => {
  return (
    <div className="prods-container">
        {products.map((item) => (
            <Product item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Products