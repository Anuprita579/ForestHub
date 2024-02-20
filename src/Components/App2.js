import React from 'react'
import { Outlet } from 'react-router-dom'
import PlantHeader from './PlantHeader'
import Closer from './Closer'

function App2() {
    
  return (
    <>
        <div className="w-full h-full">
            <PlantHeader />
            <Outlet/>
            <Closer />
        </div>
    </>

  )
}

export default App2
