import React from 'react';
import { Link } from 'react-router-dom';

function EcoCheck() {
  return (
    <>
        <div className='p-4 m-2 text-center w-full'>
            <h1 className='text-4xl font-bold text-green-800'>Eco <span className='text-amber-500'>Check</span></h1>
            <h3 className='p-2 text-md text-green-800'>Unraveling the Current Forest Landscape</h3>
            <div className='flex justify-center items-center w-full'>
              <div className='w-1/3 p-4'>
                <p className=' text-md text-green-800 m-4'>
                      Eco Check delves into the intricate world of today's forests, unveiling their current state and characteristics in the most straightforward manner. It takes a close look at the landscape, exploring the trees, plants, and wildlife that call these forests home. With a simple and easy-to-understand approach, Eco Check seeks to provide a clear snapshot of the environment, emphasizing the importance of understanding and preserving our precious forests for a sustainable future.
                  </p>
                  <Link to="/blogs"><button className='bg-green-800 text-slate-100 p-2 m-2 rounded-3xl px-5'>Read Blogs</button></Link>

              </div>
                
                <img src="https://content.api.news/v3/images/bin/46ee27bb4c5305b7027fa669665ce5eb" alt='saveforest' className='h-60'/>

            </div>
            
            
        </div> 
    </>
  )
}

export default EcoCheck
