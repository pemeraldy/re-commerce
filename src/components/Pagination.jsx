import React from 'react'

function Pagination() {
  return (
    <div className='flex justify-center space-x-3 font-tenor'>
      {Array.from(Array(5)).map((a,i) => {
        return <button key={i} className={` ${i === 0 ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'} w-8 h-8`}>{i+1}</button>
      })}
      <button className='w-8 h-8'>
        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.02612 1.0874L7.9893 8.05057L1.02612 15.0137" stroke="#14142B"/>
        </svg>
      </button>
    </div>
  )
}

export default Pagination