import React from 'react'
const items = [
    {
        id: "001",
        img_src: "https://cdn.iconscout.com/icon/premium/png-512-thumb/deforestation-2813765-2341490.png?f=webp&w=256",
        title:"Combat Deforestation",
        desc: "Every initiative we undertake stands against the rapid rates of global deforestation"
    },
    {
        id: "002",
        img_src: "https://cdn.iconscout.com/icon/premium/png-512-thumb/climate-change-2210946-1869855.png?f=webp&w=256",
        title:"Take On Climate Change",
        desc: "Scientifically acknowledged, planting trees serves as a crucial strategy in combating climate change."
    },
    {
        id: "003",
        img_src: "https://cdn.iconscout.com/icon/premium/png-512-thumb/unity-3734596-3113770.png?f=webp&w=256",
        title:"Empower Local Communities",
        desc: "In addition to environmental benefits, our projects foster positive economic growth within local communities."
    },
];



function TreeGifting() {
  return (
    <>
        <div className='flex flex-col justify-center items-center'>
            <img src="https://img.freepik.com/free-photo/crop-hands-saving-sprout_23-2147826224.jpg?size=626&ext=jpg&ga=GA1.1.693548172.1671363486&semt=ais" alt='forest' className='w-full'/>
            <div className='relative bottom-96 text-5xl font-extrabold text-black py-5 w-2/3 left-52 bg-green-100 p-4 rounded-3xl'>
                <h1> Join us to reforest the world</h1>
                <p className='font-thin text-2xl'>Together, let's make our planet greener, cleaner, and more sustainable for future generations </p>
                <button className='bg-transperant border-2 border-black text-xl p-3 m-3 rounded-xl'>Create your Forest</button>
            </div> 
            <h1 className='text-center mb-10 font-mono text-xl'>We gather and coordinate reforestation project worldwide to:</h1>
            <div className='flex justify-center items-center w-5/6'>
                {items.map((it)=>{
                    return(
                        <div className='flex justify-center items-center'>
                            <img src={it.img_src} alt="forest" className='h-40 w-40'/>
                            <div>
                                <h1 className='text-xl font-semibold text-green-600'>{it.title}</h1>
                                <p className='font-thin'>{it.desc}</p>
                            </div>
                        </div>
                    )
                })}    
            </div> 
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-serif mt-10'>A platform built for all</h1>
                <p className='italic text-slate-400'>We make the reforestation the world and fighting climate change easy. Here's how</p>
                <div>
                    <button className='bg-green-800 text-white px-5 rounded-xl m-4 p-3'>Get Seeds</button>
                    <button className='hover:bg-green-800 hover:text-white bg-slate-100 text-black px-5 rounded-xl p-3 m-4'>Get Planted</button>
                </div>
            </div>

            <div className='flex justify-center items-center'>
                {/*Card Details 1 */}
                <div className='w-80 m-10 bg-stone-100 drop-shadow-xl shadow-green-800 p-5 border-2 border-black rounded-2xl' style={{height:550}}>
                    <h1 className='text-xl font-semibold'>Get <span className='text-green-600 font-bold'>High</span> Quality Seeds</h1>
                    <p className='text-stone-600 my-2'>Your one-stop destination for a variety of the highest quality seeds.</p>
                    <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/seeds-51-263343.png?f=webp&w=256" alt='forest'/>
                    <div className='flex justify-left items-center mt-4'>
                        <img src='https://cdn.iconscout.com/icon/premium/png-512-thumb/discount-2707124-2247878.png?f=webp&w=256' alt='feature1' className='h-7 w-7 m-2'/>
                        <h1>Buy best quality seeds at discounted price</h1>
                    </div>
                    <div className='flex justify-left items-center' >
                        <img src='https://cdn.iconscout.com/icon/free/png-512/free-plant-299-450351.png?f=webp&w=256' alt='feature2' className='h-7 w-7 m-2'/>
                        <h1>Plant the trees by yourself</h1>
                    </div>
                </div>

                {/*Card Details 2 */}
                <div className='w-80 m-10 bg-stone-100 drop-shadow-xl shadow-green-800 p-5 border-2 border-black rounded-2xl' style={{height:550}}>
                    <h1 className='text-xl font-semibold'>Get your <span className='text-green-600 font-bold'>Tree</span> planted</h1>
                    <p className='text-stone-600 my-2'>We will plant your seeds in just 3 simple steps</p>
                    <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/tree-2167642-1818214.png?f=webp&w=256" alt='forest'/>
                    <div className='flex justify-left items-center'>
                        <img src='https://cdn.iconscout.com/icon/free/png-512/free-location-3079544-2561454.png?f=webp&w=256' alt='feature1' className='h-7 w-7 m-2'/>
                        <h1>Select Location and seed type</h1>
                    </div>
                    <div className='flex justify-left items-center'>
                        <img src='https://cdn.iconscout.com/icon/free/png-512/free-payment-1447774-1224088.png?f=webp&w=256' alt='feature2' className='h-7 w-7 m-2'/>
                        <h1>Make payment</h1>
                    </div>
                    <div className='flex justify-left items-center'>
                        <img src='https://cdn.iconscout.com/icon/free/png-512/free-notification-2456655-2036109.png?f=webp&w=256' alt='feature2' className='h-7 w-7 m-2'/>
                        <h1>Get notification with picture after your plant has been planted</h1>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default TreeGifting
