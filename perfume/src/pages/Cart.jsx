import React from 'react'
import '../pages/Style.css'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'

const Cart = () => {
  return (
    
    <div className='cart-container'>
        <Announcement/>
        <Navbar/>
        <Menu/>
        
        <div className="cart-wrapper">
            <h1 style={{textAlign: 'center', paddingBottom: "10px"}}>Giỏ hàng của bạn</h1>
            <div className="cart-top">
                <div className="cart-info">
                    <div className="cart-product">
                        <div className="cart-product-detail">
                            <img src="https://file.hstatic.net/1000025647/file/maison_francis_kurkdjian_baccarat_rouge_540_extrait_de_parfum_640f5c8f971d4ce3ad419f45624df78d_1024x1024.jpg" alt="" />
                            <div className="details">
                                <span>
                                    <b>Sản phẩm:</b> NƯỚC HOA MAISON FRANCIS KURKDJIAN BACCARAT ROUGE 540 EXTRAIT DE PARFUM
                                </span>
                            </div>
                        </div>
                        <div className="cart-price-detail">
                            <div className="product-price">
                                7.900.000
                            </div>                                                 
                        </div>   
                        <div className="product-amount-container">
                            <div className="product-amount">1</div>
                        </div>   
                        <div className="cart-info-del">
                            <button>Hủy</button>
                        </div>             
                    </div>
                </div>
                <div className="cart-summary">
                    <h1>Đơn hàng</h1>
                    <div className="summary-item">
                        <span>Tổng phụ</span>
                        <span>7.900.000</span>
                    </div>
                    <div className="summary-item">
                        <span>Phí giao hàng</span>
                        <span>100.000</span>
                    </div>
                    <div className="summary-item">
                        <span>Ngày đặt</span>
                        <span>09/04/2022</span>
                    </div>
                    <div className="summary-item">
                        <span>Thành tiền</span>
                        <span>8.000.000</span>
                    </div>
                    <button style={{width: '100%', padding: '10px', cursor: 'pointer', backgroundColor: "#ff3c00", color: "#fff"}}>Đặt hàng</button>
                </div>
            </div>
            <div className="cart-bottom">
                <button style={{padding: '10px', cursor: 'pointer', backgroundColor: "#c2bdbc", color: "#000"}}>Tiếp tục mua sắm</button>
                <button style={{padding: '10px', cursor: 'pointer', backgroundColor: "#1d1d1d", color: "#fff"}}>Đặt hàng</button>
            </div>
        </div>
    </div>
  )
}

export default Cart