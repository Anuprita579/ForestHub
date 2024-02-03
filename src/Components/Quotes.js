import React, { useState } from 'react'
import Lottie from 'react-lottie'
import animationData from "./forest_animation.json"

const quotes = [
    {
        id:"001",
        quote: "In the forest, every tree has a story to tell."
    },
    {
        id: "002",
        quote: "Preserve the green, sustain the scene."
    },
    {
        id: "003",
        quote: "Leave nothing but footprints, take nothing but memories."
    },
    {
        id: "004",
        quote: "A forest is not a resource to be exploited but a community to be preserved."
    },
    {
        id: "005",
        quote: "Nature does not hurry, yet everything is accomplished in the forest."
    },
    {
        id: "006",
        quote: "Forests are the heart of the Earth. Let's keep them beating."
    },
    {
        id: "007",
        quote: "Plant a tree, grow a forest."
    },
    {
        id: "008",
        quote: "Nature is not a place to visit; it is home."
    },
    {
        id: "009",
        quote: "Forests hold the key to a sustainable future."
    },
    {
        id: "010",
        quote: "Trees are poems that the Earth writes upon the sky."
    },
    {
        id: "011",
        quote: "Sow seeds of compassion, nurture forests of harmony."
    },
    {
        id: "012",
        quote: "Protecting forests is not an option; it's a necessity for our survival."
    },
    {
        id: "013",
        quote: "Nature's peace will flow into you as sunshine flows into trees."
    },
] 
function Quotes() {

    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const handleClick = () => {
        setCurrentQuoteIndex((prevIndex)=>(prevIndex+1)%quotes.length);
    }
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    }

  return (
    <>
        <div>
            <h1 className='text-4xl font-bold text-green-800 my-10'>Forest <span className='text-amber-500'>Quotes</span></h1>
            <div className='bg-emerald-100 px-20 m-4 w-96 flex flex-col justify-center items-center rounded-xl'>
                <Lottie options={defaultOptions} height={100} width={100}/>
                <h1 className='h-40 flex flex-col justify-center items-center font-sans font-thin text-xl text-green-800'> &ldquo; {quotes[currentQuoteIndex].quote}&rdquo; </h1>
                <button onClick={handleClick} className='bg-green-800 text-slate-100 p-4 m-4 rounded-xl'>Generate New</button>
            </div>

        </div>
        
        
    </>
  )
}

export default Quotes
