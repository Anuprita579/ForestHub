import React from 'react'

function Header() {
  return (
    <div>
      <div className='flex justify-between bg-green-500 items-center'>
        <h1 className='text-3xl font-bold mx-4 text-white'>ForestHub</h1>
        <ul className='flex'>
            <li className='mx-4 hover:text-zinc-200'>Home</li>
            <li className='mx-4 hover:text-zinc-200'>About Us</li>
            <li className='mx-4 hover:text-zinc-200'>Statistics</li>
            <li className='mx-4 hover:text-zinc-200'>Services</li>
            <button className='bg-zinc-200 mx-4 px-2 rounded-md hover:bg-amber-300'>Login</button>
        </ul>
      </div>
    </div>
  )
}

export default Header
