import React from 'react'
import '../components/Style.css';
// import eau_fraiche from '../assets/eau_fraiche.png'


const CategoryItem = ({item}) => {
  return (
    <div className="cate-item-container">
      <img src={item.img} alt="" />
      <div className="cate-item-info">
        <h1 className="cate-item-title">
          {item.title}
        </h1>
        <button>Mua Ngay</button>
      </div>
    </div>
  )
}

export default CategoryItem