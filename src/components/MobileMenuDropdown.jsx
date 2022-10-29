import React from 'react'
import Divider from '../assets/icons/divider-sm.svg'

import {useNav} from '../composables/useNav.js'

function MobileMenuDropdown({closeNav}) {
  const [showNav, setShowNav] = useNav(false)
  const tt = () =>{
    console.log(showNav, 'Clicked')
    setShowNav(true)
  }
  return (
    <div className='fixed top-0 left-0 w-full h-screen pt-3 px-4 bg-white z-10 pb-10 font-tenor'>
      <div className='relative w-full h-full'>

      
      <div>
        <button onClick={()=> closeNav()} className=' w-6 h-6 flex justify-center items-center'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L18.7742 18.7742" stroke="#333333" stroke-linejoin="round"/>
            <path d="M6 18.7744L18.7742 6.00022" stroke="#333333" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <div className='mt-5'>

        <div className="flex space-x-[53px]">
          <button className='w-[75px] relative uppercase text-sm tracking-[3px] leading-[35px]'>
            Women
            <span className='w-full absolute -bottom-2 left-0'>
              <img className='w-full' src={Divider} alt="" />
            </span>
          </button>
          <button className='w-[75px] relative uppercase text-sm tracking-[3px] leading-[35px]'>
            Men
            <span className='w-full absolute -bottom-2 left-0'>
              {/* <img src={Divider} alt="" /> */}
            </span>
          </button>
          <button className='w-[75px] relative uppercase text-sm tracking-[3px] leading-[35px]'>
            Kids
            <span className='w-full absolute -bottom-2 left-0'>
              {/* <img src={Divider} alt="" /> */}
            </span>
          </button>
        </div>

        <div className='mt-5 '>
          <ul className='flex flex-col space-y-4'>
            <li className='flex justify-between'>
              <span className=' font-tenor leading-[48px]'>Men</span>
              {/* <span>check mark here</span> */}
            </li>
            <li className='flex justify-between'>
              <span className=' font-tenor leading-[48px]'>Apparel</span>              
            </li>
            <li className='flex justify-between'>
              <span className=' font-tenor leading-[48px]'>Bag</span>
            </li>
            <li className='flex justify-between'>
              <span className=' font-tenor leading-[48px]'>Shoes</span>              
            </li>
          </ul>
        </div>

        <footer className=' absolute bottom-0 left-0 w-full mt-10'>
          <ul>
            <li className='flex items-center'>
              <span> 
                <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.296 0.718169L21.6599 1.42528C21.6599 1.42528 22.367 7.78924 15.296 14.8603C8.22491 21.9314 1.85957 21.2256 1.85957 21.2256L1.15246 14.8617L6.10359 12.0333L8.57777 14.5074C8.57777 14.5074 10.3455 14.1539 12.4669 12.0326C14.5882 9.91125 14.9417 8.14348 14.9417 8.14348L12.4675 5.66929L15.296 0.718169Z" stroke="#555555"/>
                </svg>
              </span>
              <span className=' leading-9 ml-4'>+2348039482846</span>
            </li>
            <li className='flex items-center'>
              <span> 
                <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.324 11.5C22.324 17.0228 12.324 24.5 12.324 24.5C12.324 24.5 2.32404 17.0228 2.32404 11.5C2.32404 5.97715 6.80119 1.5 12.324 1.5C17.8469 1.5 22.324 5.97715 22.324 11.5Z" stroke="#555555"/>
                  <circle cx="12.324" cy="11.5" r="3" stroke="#555555"/>
                </svg>
              </span>
              <span className='leading-9 ml-4'>Store Locator</span>
            </li>
          </ul>

          <div className='divider my-10 w-full mx-auto flex justify-center'>
            <svg width="125" height="10" viewBox="0 0 125 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M62.5775 9.75649L67.1271 5.20689H124.979V5.00009H67.1271L62.5775 0.502197L58.0796 5.00009H0.0205688V5.20689H58.0796L62.5775 9.75649ZM62.5775 0.812397L66.9203 5.10349L62.5775 9.44629L58.2347 5.10349L62.5775 0.812397Z" fill="#555555"/>
          </svg>

          </div>

          <div className='flex justify-center items-center space-x-4'>
            <a href='#'>
              <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.3497 2.24357C20.5841 2.58357 19.7617 2.81237 18.8985 2.91557C19.7801 2.38757 20.4561 1.55157 20.7745 0.55477C19.9505 1.04357 19.0369 1.39877 18.0641 1.59077C17.2857 0.761169 16.1769 0.242769 14.9497 0.242769C12.5929 0.242769 10.6825 2.15397 10.6825 4.50997C10.6825 4.84437 10.7209 5.17077 10.7929 5.48197C7.24649 5.30437 4.10249 3.60517 1.99689 1.02277C1.63049 1.65317 1.42009 2.38597 1.42009 3.16917C1.42009 4.64917 2.17289 5.95557 3.31769 6.72037C2.61849 6.69797 1.96009 6.50597 1.38489 6.18677C1.38489 6.20517 1.38489 6.22197 1.38489 6.24037C1.38489 8.30837 2.85529 10.0332 4.80809 10.4244C4.45049 10.522 4.07289 10.574 3.68329 10.574C3.40889 10.574 3.14089 10.5468 2.88089 10.498C3.42409 12.1932 5.00009 13.4276 6.86729 13.462C5.40729 14.6068 3.56729 15.2892 1.56729 15.2892C1.22329 15.2892 0.883289 15.2692 0.548889 15.2292C2.43769 16.4396 4.68009 17.146 7.09049 17.146C14.9401 17.146 19.2313 10.6436 19.2313 5.00437C19.2313 4.81957 19.2273 4.63557 19.2193 4.45237C20.0537 3.84997 20.7777 3.09877 21.3497 2.24357Z" fill="#555555"/>
              </svg>
            </a>
            <a href='#'>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.94817 3.09396C5.86097 3.09396 3.34973 5.60752 3.34973 8.69552V16.6955C3.34973 19.7827 5.86329 22.294 8.95129 22.294H16.9513C20.0385 22.294 22.5497 19.7804 22.5497 16.6924V8.6924C22.5497 5.6052 20.0362 3.09396 16.9482 3.09396H8.94817ZM18.5497 6.29396C18.9913 6.29396 19.3497 6.65236 19.3497 7.09396C19.3497 7.53556 18.9913 7.89396 18.5497 7.89396C18.1081 7.89396 17.7497 7.53556 17.7497 7.09396C17.7497 6.65236 18.1081 6.29396 18.5497 6.29396ZM12.9497 7.89396C15.5969 7.89396 17.7497 10.0468 17.7497 12.694C17.7497 15.3412 15.5969 17.494 12.9497 17.494C10.3025 17.494 8.14973 15.3412 8.14973 12.694C8.14973 10.0468 10.3025 7.89396 12.9497 7.89396ZM12.9497 9.49396C12.101 9.49396 11.2871 9.8311 10.687 10.4312C10.0869 11.0313 9.74973 11.8453 9.74973 12.694C9.74973 13.5427 10.0869 14.3566 10.687 14.9567C11.2871 15.5568 12.101 15.894 12.9497 15.894C13.7984 15.894 14.6124 15.5568 15.2125 14.9567C15.8126 14.3566 16.1497 13.5427 16.1497 12.694C16.1497 11.8453 15.8126 11.0313 15.2125 10.4312C14.6124 9.8311 13.7984 9.49396 12.9497 9.49396Z" fill="#555555"/>
              </svg>
            </a>
            <a href='#'>
              <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.9497 0.893978C7.60088 0.893978 3.25437 1.73304 3.25437 1.73304L3.24343 1.74554C1.71821 1.98947 0.549683 3.30008 0.549683 4.89398V9.69398V9.69554V14.494V14.4955C0.551171 15.2568 0.823979 15.9925 1.31912 16.5707C1.81426 17.1489 2.49931 17.5317 3.25125 17.6502L3.25437 17.6549C3.25437 17.6549 7.60088 18.4955 10.9497 18.4955C14.2985 18.4955 18.645 17.6549 18.645 17.6549L18.6466 17.6534C19.3993 17.535 20.0851 17.152 20.5807 16.5731C21.0762 15.9942 21.3489 15.2575 21.3497 14.4955V14.494V9.69554V9.69398V4.89398C21.3486 4.13248 21.0759 3.39634 20.5807 2.81782C20.0856 2.23931 19.4003 1.85634 18.6481 1.73773L18.645 1.73304C18.645 1.73304 14.2985 0.893978 10.9497 0.893978ZM8.54968 6.01273L14.9497 9.69398L8.54968 13.3752V6.01273Z" fill="#555555"/>
              </svg>
            </a>
          </div>

        </footer>
      </div>
      </div>
    </div>
  )
}

export default MobileMenuDropdown