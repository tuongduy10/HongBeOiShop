import React, { Component, useState, useEffect } from 'react'
import { products } from "../data";
import Product from './Product';
import '../components/Style.css';

export default class Products extends Component{
  constructor(props){
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    }
  }
  componentDidMount(){
    fetch("http://localhost:3001/perfume/findall")
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          products: result.data
        })
      })
      .catch(result => {
        console.log(result)
      })
  }
  render(){
    const {error, isLoaded, products} = this.state
    if(products){
      return(
        <div className="prods-container">
            {products.map((item) => (
                <Product item={item} key={item._id}/>
            ))}
        </div>
      )
    }
  }
}

