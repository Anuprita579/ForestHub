import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css"
import FeaturesList from './FeaturesList'
import Quotes from './Quotes'
import GoogleLens from "./GoogleLens"
import Testimonials from './Testimonials'

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
                <h1 className='text-9xl font-extrabold font-mono text-slate-100 '>GreenCover</h1>
                <h3 className='text-3xl font-semibold text-slate-100'>Find your nearest Green Haven</h3>
                <Link to="/why"><button className='text-slate-100 p-4 m-4 border-2 rounded-xl'>Uncover Now</button></Link>
            </div>

            <div data-aos="fade-down" className="flex flex-col items-center relative bottom-40">
                <div className="w-10 h-10 bg-transparent z-50 border-b-8 border-r-8 border-green-800 transform rotate-45 mb-2 animate-scrolldown" data-aos="scrolldown"></div>
                <div className="w-10 h-10 bg-transparent z-50 border-b-8 border-r-8 border-green-800 transform rotate-45 animate-scrolldown" data-aos="scrolldown"></div>
            </div>
            
        </div>

        <div className='p-4 m-2 text-center flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold text-green-800'>About <span className='text-amber-500'>Us</span></h1>
            <p className='w-2/3 p-4 text-md text-green-800 m-4'>
                Welcome to ForestHub, where our passion for nature fuels a commitment to preserve and celebrate the world's forests. Founded with a vision to raise awareness and inspire action, ForestHub is your digital gateway to explore, understand, and contribute to the well-being of our planet's vital ecosystems. Join us on this green journey as we share the beauty of forests, advocate for conservation, and work together towards a sustainable and harmonious coexistence with nature. Together, let's grow a forest-friendly community and make a lasting impact on the future of our Earth. Welcome to ForestHub &mdash; Where Nature Connects Us All.
            </p>

            <FeaturesList />

            <Quotes />

            <GoogleLens />

            <Testimonials />


        </div>
    </div>
  )
}

export default Home
