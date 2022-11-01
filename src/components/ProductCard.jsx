import React from 'react'
import Product from '../assets/img/product-sample.png'
function ProductCard() {
  return (
    <div className=''>
      <div className='relative w-full max-w-[165px] h-[220px] md:h-[332px] md:max-w-full'>
        <img className='absolute w-full h-full object-cover' src={Product} alt="product image" />
        <span className='absolute bottom-2 right-2'>
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.84806 2.69799C0.272813 4.27325 0.272814 6.82723 1.84806 8.40248L7.95796 14.5124L7.99995 14.4704L8.042 14.5124L14.1519 8.40253C15.7271 6.82728 15.7271 4.2733 14.1519 2.69805C12.5766 1.12279 10.0227 1.1228 8.44741 2.69805L8.35356 2.79189C8.1583 2.98716 7.84171 2.98716 7.64645 2.79189L7.55255 2.69799C5.9773 1.12274 3.42331 1.12274 1.84806 2.69799Z" stroke="#DD8560"/>
            </svg>
        </span>
      </div>
      <div className='mt-2  font-tenor text-xs'>
        <h4 className='font-bold md:text-lg'>Adiddas</h4>
        <p className='text-gray-500 md:text-base'>Lorem ipsum dolor sit...</p>
        <h2 className='text-[#DD8560] mt-2 font-bold md:text-lg '>$22.59</h2>
      </div>
    </div>
  )
}

export default ProductCard