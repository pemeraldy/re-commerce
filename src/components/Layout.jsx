import React from 'react'

function Layout({children}) {
  return (
    <div className='max-w-[1260px] mx-4 md:mx-auto bg-white py-[22px] px-2'>{children}</div>
  )
}

export default Layout