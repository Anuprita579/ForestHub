import React from 'react'
import Lottie from 'react-lottie'
import animationData from "./mail-animation.json"
import { useLocation } from 'react-router-dom'

function NegativeMail() {
    const location = useLocation();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    }
  return (
    <>
        <div className='w-full flex justify-center items-center min-h-screen'>
            <div className='w-2/3'>
                <Lottie options={defaultOptions} height={100} width={100}/>
                <h1 className='text-slate-400 text-xl '>To : <span className='text-black text-lg bg-slate-200 px-4 rounded-xl' > <span className='px-2 mx-1 rounded-full bg-green-600 text-white'>F</span>Forest Department </span> </h1> 
                <hr></hr>
                <h1 className='text-lg'><span className='text-slate-400 text-xl '>Sub : </span> Urgent Action Needed &mdash; Negative Forest News </h1> 
                <hr></hr> 
                <br></br> 
                <p className='text-md'>Dear Forest Department, 
                    <br></br>
                    We hope this message finds you well. We're writing regarding recent concerning reports on our forests, specifically the article titled <span className='font-semibold'>{location.state.title}</span>. The news highlights issues like deforestation, habitat destruction, and wildlife poaching.
                    <br></br>
                    As stewards of our environment, swift action is crucial. We urge the relevant authorities to reinforce enforcement, implement stricter regulations, and raise public awareness.
                    <br></br>
                    We're ready to assist in any capacity to address these challenges. Let's work together to protect our forests and ensure a sustainable future for all.
                    <br></br>
                    Best regards,
                    <br></br>
                    GreenGuide Team
                </p> 
            </div>
        </div> 
    </>
  )
}

export default NegativeMail
