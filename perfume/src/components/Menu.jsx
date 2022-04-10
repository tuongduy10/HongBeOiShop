import React from 'react'
import '../components/Style.css';

const Menu = () => {
  return (
    <div className="navbar-container">
        <div className="menu-item-wrapper">
            <div className="menu-item-prod">
                <a href="/">TRANG CHỦ</a>
            </div>
            <div className="menu-item-prod">
                <a href="/products">SẢN PHẨM</a>
            </div>
            <div className="menu-item-prod">
                <a href="/">LIÊN HỆ</a>              
            </div>
            <div className="menu-item-prod">
                <a href="/">VỀ CHÚNG TÔI</a>               
            </div>
        </div>
    </div>
    
  )
}

export default Menu