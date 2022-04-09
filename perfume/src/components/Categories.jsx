import React from 'react'
import { categories } from "../data";
import CategoryItem from './CategoryItem';
import '../components/Style.css';


const Categories = () => {
  return (
    <div className="cate-container">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Categories