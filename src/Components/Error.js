import React from 'react'
import { useRouteError, Link } from 'react-router-dom'


function Error() {
    const err = useRouteError();
  return (
    <div>
        <div className='h-screen bg-green-100 flex align-middle justify-center items-center'>
            <div className='bg-green-200 text-center flex align-middle justify-center items-center p-4 rounded-3xl'>
                <img src="https://img.freepik.com/free-vector/flat-jungle-background_23-2148961431.jpg?w=1380&t=st=1706884681~exp=1706885281~hmac=81311959b05a90ded1a40e43555fa573f43a37115a9efb2a39f4436d01f4c30c" alt='errorimg' className='h-60 rounded-full'/>
                <div className='p-3'>
                    <h1 className='text-8xl font-extrabold text-green-950'>{err.status}</h1>
                    <h1 className='text-xl font-semibold text-green-950'>The page you are looking for </h1> 
                    <h1 className='text-xl font-semibold text-green-950'> Is hidden among trees 🌳🌳 </h1>   
                    <h2 className='text-md text-green-950'>{err.statusText}</h2>
                    <Link to="/"><button className='bg-green-950 text-white p-4'> Back to Home</button></Link>
                </div>
                
            </div> 
        </div>
      
    </div>
  )
}

export default Error
