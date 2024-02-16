import React from 'react'
import { Outlet } from 'react-router-dom'
import PlantHeader from './PlantHeader'

function App2() {
    
  return (
    <>
        <div className="w-full h-full">
            <PlantHeader />
            <Outlet/>
        </div>
    </>

  )
}

export default App2
