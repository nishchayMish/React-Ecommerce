import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <div className='absolute top-[80px] left-[0px] bg-[#f9fafb] w-full pl-8 pt-8 pb-5 z-50'>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recommended</h2>
        
        <div className="flex flex-wrap gap-3">
          <Link to="/">
            <button className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 hover:border-gray-400 transition-all">
              Home
            </button>
          </Link>
          <Link to="/nike">
            <button className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 hover:border-gray-400 transition-all">
              Nike
            </button>
          </Link>
          <Link to="/adidas">
            <button className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 hover:border-gray-400 transition-all">
              Adidas
            </button>
          </Link>
          <Link to="/puma">
            <button className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 hover:border-gray-400 transition-all">
              Puma
            </button>
          </Link>
          <Link to="/vans">
            <button className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 hover:border-gray-400 transition-all">
              Vans
            </button>
          </Link>
        </div>
    </div>
  )
}

export default Links