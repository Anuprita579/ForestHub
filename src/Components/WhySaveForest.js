import React from 'react'
import TreeStand from './TreeStand';
import TreeLearn from './TreeLearn';

function WhySaveForest() {
    const leaf_color = {
        backgroundColor: '#8fda1f',
    };
  return (
    <>
      <div className='text-center mt-10'>
        <h1 className='text-4xl font-bold text-green-800'>Nature's SOS</h1>
        <h3 className='p-2 text-md text-green-800'>Understanding why we need to save Forests for Future</h3>
      </div>

      <div className="flex items-center justify-center align-middle h-screen w-screen">
          <TreeStand />
          <div className="p-2 rounded-md shadow-xl relative right-1/2 bottom-20" style={leaf_color}>
            <TreeLearn />
          </div>
      </div>

      
    
    </>

    
  )
}

export default WhySaveForest
