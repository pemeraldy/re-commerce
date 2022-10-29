import React from 'react'
import Logo from '../assets/logo.svg'
import Menu from '../assets/menuicon.svg'
import SearchIcon from '../assets/search-icon.svg'
import CartIcon from '../assets/cart.svg'
import MobileMenuDropdown from './MobileMenuDropdown'

function Navigation() {
  return (
     <div className="flex font-tenor justify-between">
        <MobileMenuDropdown />
        <button>
          <img src={Menu} alt="menu icon" />
        </button>
        
        <a className=' cursor-pointer' heref="/">
          <img src={Logo} alt="yopeeStore" />
        </a>

        <div className='flex items-center space-x-4 md:space-x-9'>
          <button className='pt-1'>
            <img src={SearchIcon} alt="" />           
          </button>
          <button>            
            <img src={CartIcon} alt="" />
          </button>
        </div>
     </div>
  )
}

export default Navigation