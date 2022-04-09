import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import Products from '../components/Products'


const ProductList = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Menu/>
      <h1 style={{textAlign: 'center'}}>
        Nước Hoa
      </h1>
      <Products/>
    </div>
  )
}

export default ProductList