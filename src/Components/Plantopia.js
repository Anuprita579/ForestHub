import React from 'react'
import { Link } from 'react-router-dom'

function Plantopia() {
  return (
    <>
        <div>
            <h1 className='text-4xl font-bold text-green-800 mt-7'>Plant<span className='text-amber-500'>opia</span></h1>
            <h3 className='p-2 text-md text-green-800'>Buy, Gift and Grow Trees</h3>

        </div>
        <div className='flex justify-center items-center'>
            <img src="https://images.unsplash.com/photo-1532611322744-369123d95bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='plant' className='w-2/3'/>
            <div className='w-1/3'>
                <h1 className='dancing_text font-bold text-5xl'>Green Gifting, Tree Thrifting </h1>    
                <h2 className='dancing_text font-thin text-xl'>Make every purchase count</h2>
                <div>
                    <Link to="/feature/plantopia"><button className='font-mono bg-green-800 text-white p-2 m-2'>Buy Plant</button></Link>
                    <Link to="/feature/plantopia/planttree"><button className='font-mono bg-green-800 text-white p-2 m-2'>Plant Tree</button></Link>
                </div>
            </div>    
        </div> 
    </>
  )
}

export default Plantopia
