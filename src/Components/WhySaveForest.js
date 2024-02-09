import React from 'react'
import TreeStand from './TreeStand';
import TreeLearn from './TreeLearn';

function WhySaveForest() {
  return (
    <>
    <div className='h-full w-full'>
    <div className='text-center mt-10'>
        <h1 className='text-4xl font-bold text-green-800'>Nature's SOS</h1>
        <h3 className='p-2 text-md text-green-800'>Understanding why we need to save Forests for Future</h3>
      </div>

      <div className="flex items-center justify-center align-middle">
          <TreeStand />
          <div className="p-2 rounded-md shadow-xl relative right-1/2 bottom-20" >
            <TreeLearn />
          </div>
      </div>

    </div>
      

      
    
    </>

    
  )
}

export default WhySaveForest
