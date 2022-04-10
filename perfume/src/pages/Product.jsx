import React, { useState } from 'react' //Component, useEffect,    
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import { useLocation } from 'react-router-dom'
import "../pages/Style.css"
import axios from 'axios'


// const location = useLocation().search;
//     // const id = location.pathname.split('/')[2]
//     // const search = useLocation().search;
//     const id = new URLSearchParams(location).get('id');
//     const [product, setProduct] = useState({});
//     useEffect(() => {
//         const getProduct = async() =>{
//             axios.get(`http://localhost:3001/Perfume/findbyid?id=${id}`)
//         .then(result => {
//             setProduct(result.data.data)
//         })
//         // .catch(result => {

//         // })
//         }   
//     },[id]

const Product = () => {
    const search = useLocation().search;
    const _id = new URLSearchParams(search).get('id');
    const [product, setProduct] = useState(undefined);
    React.useEffect(()=>{
        axios.get(`http://localhost:3001/perfume/findbyid?id=${_id}`).then(function (response){
            setProduct(response.data.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    },[_id])
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Menu/>
                {(product !== undefined) ? (
                    <div className="product-container-p">
                        <div className="product-wrapper-p">
                            <div className="img-container-p">
                                <img src={product.Perfume_Image} alt="" />
                            </div>
                            
                            <div className="product-info-p">
                                <h1>{product.Perfume_Name}</h1>
                                <div className="product-description-p">
                                    <p style={{margin: '20px 0px', textAlign: 'justify'}}>Mô tả: {product.Perfume_Description}
                                    </p>
                                </div>
                                <div className="product-price-p">
                                    <span style={{fontSize: '25px'}}>Giá: {product.Perfume_Price}</span>
                                </div>
                                <div className="product-gender-p">
                                    <span style={{fontSize: '25px'}}>Giới tính: {product.Gender}</span>
                                </div>
                                <div className="product-type-p">
                                    <span style={{fontSize: '25px'}}>Nồng độ: {product.Perfume_Type}</span>
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
                ) : (<></>)}
        </div>
      )
}
  
export default Product

// export default class Product extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             product: []
//         }
//         const search = useLocation().search;
//         const name = new URLSearchParams(search).get('id');
//         console.log(name)
//     }
    
//     componentDidMount() {
//         axios.get(`http://localhost:3001/Perfume/findbyid?id=6250fe430e6ea2bff8cb512d`)
//             .then(result => {
//                 this.setState({
//                     product: result.data.data
//                 })
//             })
//             .catch(result => {

//             })
//     }

//     render() {
//         var {product} = this.state
//         return (
//             <div>
//                 <Announcement />
//                 <Navbar />
//                 <Menu />
//                 <div className="product-container-p">
//                     <div className="product-wrapper-p">
//                         <div className="img-container-p">
//                             <img src={product.Perfume_Image} alt="" />
//                         </div>

//                         <div className="product-info-p">
//                             <h1>{product.Perfume_Name}</h1>
//                             <div className="product-description-p">
//                                 <p style={{ margin: '20px 0px', textAlign: 'justify' }}>
//                                     {product.Perfume_Description}
//                                 </p>
//                             </div>
//                             <div className="product-price-p">
//                                 <span style={{ fontSize: '35px' }}>{product.Perfume_Price}</span>
//                             </div>
//                             <div className="add-container">
//                                 <div className="amount-container">
//                                     <span style={{
//                                         display: 'flex',
//                                         width: '30px',
//                                         height: '30px',
//                                         margin: '0px 25px',
//                                         border: '1px solid #ff3c00',
//                                         borderRadius: '7px',
//                                         alignItems: 'center',
//                                         justifyContent: 'center'
//                                     }}>1</span>
//                                 </div>
//                                 <button style={{
//                                     padding: '15px',
//                                     border: '2px solid #ff3c00',
//                                     borderRadius: '7px',
//                                     backgroundColor: 'white',
//                                     cursor: 'pointer',
//                                     fontWeight: '500',
//                                 }}>Thêm vào Giỏ hàng</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
