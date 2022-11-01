import React from 'react'

function Filters() {
  return (
    <div className='flex justify-between items-center font-tenor'>
      <h3 className='uppercase text-xs'>10/4500 Apparels</h3>

        <form >
          <div className='flex space-x-2'>
            <select className='bg-gray-100 w-[72px] rounded-2xl' name="type" id="">
              <option className='font-tenor text-gray-500' value="latest">
                New
              </option>
              <option value="exp">Expensive</option>
            </select>

            <button type='button' className=' flex justify-center items-center w-[36px] h-[36px] rounded-full bg-gray-100'>
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                <path d="M10.1709 14.2729H16.6473" stroke="#14142B"/>
                <path d="M10.1902 5.93958H16.6666" stroke="#14142B"/>
                <rect x="2.17761" y="3.06879" width="5.66667" height="5.66667" stroke="#14142A"/>
                <rect x="2.17761" y="11.4515" width="5.66667" height="5.66667" stroke="#14142A"/>
                </g>
                </svg>
            </button>
            <button type='button' className=' flex justify-center items-center w-[36px] h-[36px] rounded-full bg-gray-100'>
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.5 0.356232V1.18957H15.5V0.356232H0.5ZM6.33333 7.85623H9.66667V7.0229H6.33333V7.85623ZM13 4.5229H3V3.68956H13V4.5229Z" fill="#DD8560"/>
              </svg>
            </button>
          </div>
        </form>
    
    </div>
  )
}

export default Filters