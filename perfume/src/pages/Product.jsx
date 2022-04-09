import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import "../pages/Style.css"

const Product = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Menu/>
        <div className="product-container-p">
            <div className="product-wrapper-p">
                <div className="img-container-p">
                    <img src="https://file.hstatic.net/1000025647/file/maison_francis_kurkdjian_baccarat_rouge_540_extrait_de_parfum_640f5c8f971d4ce3ad419f45624df78d_1024x1024.jpg" alt="" />
                </div>
                
                <div className="product-info-p">
                    <h1>NƯỚC HOA MAISON FRANCIS KURKDJIAN BACCARAT ROUGE 540 EXTRAIT DE PARFUM</h1>
                    <div className="product-description-p">
                        <p style={{margin: '20px 0px', textAlign: 'justify'}}>NƯỚC HOA MAISON FRANCIS KURKDJIAN BACCARAT ROUGE 540 EXTRAIT DE PARFUM
                        NƯỚC HOA MAISON FRANCIS KURKDJIAN BACCARAT ROUGE 540 EXTRAIT DE PARFUM
                        NƯỚC HOA MAISON FRANCIS KURKDJIAN BACCARAT ROUGE 540 EXTRAIT DE PARFUM
                        NƯỚC HOA MAISON FRANCIS KURKDJIAN BACCARAT ROUGE 540 EXTRAIT DE PARFUM
                        </p>
                    </div>
                    <div className="product-price-p">
                        <span style={{fontSize: '35px'}}>7.900.000</span>
                    </div>
                    <div className="add-container">
                        <div className="amount-container">
                            <span style={{
                                display: 'flex',
                                width: '30px',
                                height: '30px',
                                margin: '0px 25px',
                                border: '1px solid #ff3c00',
                                borderRadius: '7px',
                                alignItems: 'center',
                                justifyContent: 'center'
                        }}>1</span>
                        </div>
                        <button style={{
                            padding: '15px',
                            border: '2px solid #ff3c00',
                            borderRadius: '7px',
                            backgroundColor: 'white',
                            cursor: 'pointer',
                            fontWeight: '500',
                        }}>Thêm vào Giỏ hàng</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product