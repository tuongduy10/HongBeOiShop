import React from 'react'
import '../components/Style.css';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Product = ({item}) => {
  return (
    <div className="section-p1" onClick={productDetail}>
      <div className="product-container">
        <div className="product-wrapper">        
           <div className="product-item">
            <img src={item.Perfume_Image} alt="" />
            <div className="product-description">
              <h5>{item.Perfume_Name}</h5>
              <h4>{item.Perfume_Price}</h4>
            </div>
            <div className="cart-icon">
              <a href=".">
              <ShoppingBagOutlinedIcon style={{color: "#ff3c00"}}></ShoppingBagOutlinedIcon>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
function productDetail(){
  window.location = '/product';
}

export default Product