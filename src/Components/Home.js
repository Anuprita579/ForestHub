import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css"
import FeaturesList from './FeaturesList'
import Quotes from './Quotes'
import Testimonials from './Testimonials'
import IndiaMap from './IndiaMap'
import Closer from './Closer'
import EcoCheck from './EcoCheck'
import TreeNation from './TreeNation'
import ForestEvent from './ForestEvent'

function Home() {
    useEffect(()=>{
        Aos.init({
            duration:1000,
        })
    }, [])
  return (
    <div>
        <div className='flex flex-col justify-center items-center h-full w-full'>
            <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" alt='forest' className='h-screen w-screen'/>
            <div className='relative bottom-80 text-center'>
                <h1 className='text-9xl font-extrabold font-mono text-slate-100 '>GreenGuide </h1>
                <h3 className='text-3xl font-semibold text-slate-100'>Find your nearest Green Haven</h3>
                <Link to="/maps"><button className='text-slate-100 p-4 m-4 border-2 rounded-xl'>Uncover Now</button></Link>
            </div>

            <div data-aos="fade-down" className="flex flex-col items-center relative bottom-40">
                <div className="w-10 h-10 bg-transparent z-50 border-b-8 border-r-8 border-green-800 transform rotate-45 mb-2 animate-scrolldown" data-aos="scrolldown"></div>
                <div className="w-10 h-10 bg-transparent z-50 border-b-8 border-r-8 border-green-800 transform rotate-45 animate-scrolldown" data-aos="scrolldown"></div>
            </div>
            
        </div>

        <div className='flex flex-col justify-center items-center text-center'>
            <IndiaMap />
            <FeaturesList />
            <EcoCheck />
            <Quotes />
            <Testimonials />
            <Closer />
            <TreeNation />
            <ForestEvent />
        </div>
        
    </div>
  )
}

export default Home
