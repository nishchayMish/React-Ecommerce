import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm border-t py-5'>
        <div>
            <img src={assets.logo} className='mb-5 w-32'/>
            <p className='w-full md:w-2/3 text-gray-600'>
                Find important links, customer support, policies, and social media updates in our footer. Stay connected and enjoy a seamless shopping experience!
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91-123456789</li>
                <li>nishchaymishra2100@gmail.com</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer