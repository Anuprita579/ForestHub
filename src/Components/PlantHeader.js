import React from 'react'
import { IonIcon } from '@ionic/react'
import { cart } from 'ionicons/icons'
import { Link } from 'react-router-dom'
function PlantHeader() {
  return (
    <>
        <div className='z-50 sticky top-0 w-full'>
        <div className='flex justify-between bg-slate-100 items-center'>
            <Link to="/"><h1 className='text-3xl font-bold mx-4 text-green-800 p-2'>GreenGuide</h1></Link>
            <ul className='flex'>
                <Link to="/"><li className='mx-4 hover:text-green-600'>Home</li></Link>
                <Link to="/cart" ><li className='mx-4 hover:text-green-600 '> <IonIcon icon={cart} /> </li></Link>
                <Link to="/login"><button className='bg-green-800 mx-4 px-2 rounded-md text-white hover:bg-amber-300 hover:text-green-800'>Login</button></Link>
            </ul>
        </div>
        </div> 
    </>
  )
}

export default PlantHeader
