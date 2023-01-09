import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex bg-red-500 justify-between items-center p-5'>
      <div>logo</div>
      <Link to='/add' className='bg-white text-red-500 rounded-sm p-2 border-red-500'>
        Add new puppy
      </Link>
    </div>
  )
}

export default Header