import React, { useState } from 'react'
import TreeStand from './TreeStand';
import TreeLearn from './TreeLearn';

function WhySaveForest() {
  const [activeDescription, setActiveDescription] = useState("");
  const [activeLeaf, setActiveLeaf] = useState(null);
  
  const handleLeafClick = (leafId, description) => {
    setActiveDescription(description);
    setActiveLeaf(leafId);
  };
  return (
    <>
    <div className='min-h-screen w-full'>
    <div className='text-center mt-10'>
        <h1 className='text-4xl font-bold text-green-800'>Nature's SOS</h1>
        <h3 className='p-2 text-md text-green-800'>Understanding why we need to save Forests for Future</h3>
      </div>

      <div className="flex items-center justify-center align-middle">
          <TreeStand />
          <div className="p-2 rounded-md shadow-xl relative right-1/2 bottom-20" >
            <TreeLearn onLeafClick={handleLeafClick} activeLeaf={activeLeaf}/>
          </div>
      </div>
      <div className="mt-10 text-center w-full flex justify-center">
        {activeDescription && <p className='w-2/3 text-xl text-green-600 font-serif p-40 rounded-full bg-gradient-to-b from-emerald-100'>{activeDescription}</p>}
      </div>

    </div>
    
    </>

    
  )
}

export default WhySaveForest
