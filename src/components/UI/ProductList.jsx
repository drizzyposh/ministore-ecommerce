import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ data, index }) => {
  return (
    <>
    {data?.map((item) => (
        <ProductCard item={item} key={index}/>
    ))}    
    </>
  )
}

export default ProductList
