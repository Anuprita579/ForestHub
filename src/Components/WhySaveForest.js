import React from 'react'
import TreeStand from './TreeStand';
import TreeLearn from './TreeLearn';

function WhySaveForest() {
    const leaf_color = {
        backgroundColor: '#8fda1f',
    };
  return (
    <div className="flex items-center justify-center align-middle h-screen w-screen">
        <TreeStand />
        <div className="p-2 rounded-md shadow-xl relative right-1/2 bottom-20" style={leaf_color}>
          <TreeLearn />
        </div>
    </div>
  )
}

export default WhySaveForest
