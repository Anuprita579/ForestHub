import React from 'react'
import { IonIcon } from '@ionic/react';
import { logoFacebook, logoInstagram, logoTwitter, people } from 'ionicons/icons';
import { Link } from 'react-router-dom';

function Closer() {
    const closer_left = {
        backgroundColor: "#DAE3D0",
    }
  return (
    <>
        <div className='w-full '>
            <div className='grid grid-cols-2'>
                <div style={closer_left} className='flex flex-col justify-center items-center text-center p-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                    <h1 className='font-bold text-xl text-black font-mono'>Wait What?</h1>
                    <button className='bg-slate-200 p-2 px-5 rounded-3xl font-thin'>Check out guide</button>
                </div>
                <div className='bg-lime-100 flex flex-col justify-center items-center text-center p-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                    <h1 className='font-bold text-xl text-black font-mono'>Who are we?</h1>
                    <Link to="/about"><button className='bg-slate-200 p-2 rounded-3xl px-5 font-thin'>About Us</button></Link>
                </div>
            </div> 

            <div className='grid grid-cols-2'>
                <div className='bg-lime-100 flex flex-col justify-center items-center text-center p-5'>
                    <div>
                        <IonIcon icon={logoFacebook} size='large'></IonIcon>
                        <IonIcon icon={logoInstagram} size='large'></IonIcon>
                        <IonIcon icon={logoTwitter} size='large' ></IonIcon>
                    </div>
                    <h1 className='font-bold text-xl text-black font-mono'>Get in Touch</h1>
                    <button className='bg-slate-200 p-2 px-5 rounded-3xl font-thin'>Connect</button>
                </div>
                <div style={closer_left} className='flex flex-col justify-center items-center text-center p-5'>
                    <IonIcon icon={people} size='large' ></IonIcon>
                    <h1 className='font-bold text-xl text-black font-mono'>Join Us</h1>
                    <button className='bg-slate-200 p-2 rounded-3xl px-5 font-thin'>Our Community</button>
                </div>
            </div>    
        </div> 
    </>
  )
}

export default Closer
