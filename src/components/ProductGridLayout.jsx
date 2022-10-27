import React from 'react'
// import ProductCard from './ProductCard'
function ProductGridLayout({children}) {
  return (
    <div className='grid grid-cols-2 gap-2'>
      {children}
    </div>
  )
}

export default ProductGridLayout