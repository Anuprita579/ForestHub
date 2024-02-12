import { IonIcon } from '@ionic/react';
import { cash, flower, people, stopwatch } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
const plant_images = [
    {
        id:"001",
        img_src: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=1791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img_text: "Transform your space into a verdant paradise with our plant collection."
    },
    {
        id:"002",
        img_src: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img_text: "Life's too short for dull spaces. Light up with Green, and let your world shine brightly!"
    },
];

function PlantopiaHome() {
    const [image, setImage] = useState(0);
    const nextSlide = () => {
        setImage((nextImage)=> (nextImage +1) % plant_images.length );
    }
    useEffect(()=>{
        const timer = setInterval(()=>{
            nextSlide();
        }, 5000);
        return()=>{
            clearInterval(timer);
        }

    }, [image])
  return (
    <>
        <div>
            <img src={plant_images[image].img_src} alt='plant'/>
            <h1 className='relative bottom-96 text-5xl font-extrabold text-white bg-green-500 py-5'>{plant_images[image].img_text}</h1>  
        </div> 
        <div className='text-center w-full'>
            <h1>Happiness is buying plants from GreenGuide</h1>
        
            <div className='flex bg-slate-200 w-full justify-center'>
                <div className='h-20 w-20 bg-slate-100 rounded-xl p-2 m-2'>
                    <IonIcon icon={people}></IonIcon>
                    <h1>Help Center</h1> 
                </div>
                <div className='h-20 w-20 bg-slate-100 rounded-xl p-2 m-2'>
                    <IonIcon icon={stopwatch}></IonIcon>
                    <h1>Track Orders</h1> 
                </div>
                <div className='h-20 w-20 bg-slate-100 rounded-xl p-2 m-2'>
                    <IonIcon icon={flower}></IonIcon>
                    <h1>Variety</h1> 
                </div>
                <div className='h-20 w-20 bg-slate-100 rounded-xl p-2 m-2'>
                    <IonIcon icon={cash}></IonIcon>
                    <h1>Offers</h1> 
                </div>
            </div>
            
        </div>
    </>
  )
}

export default PlantopiaHome
