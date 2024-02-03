import React from 'react'

const features = [
    {
        id: "001",
        img_src: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTV8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
        feature_title: "Tourism"
    },
    {
        id: "002",
        img_src: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTV8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
        feature_title: "Tourism"
    },
    {
        id: "003",
        img_src: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTV8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
        feature_title: "Tourism"
    },
    {
        id: "004",
        img_src: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTV8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
        feature_title: "Tourism"
    },
] 

function FeaturesList() {
  return (
    <>
        <div className='p-4 m-2 text-center flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold text-green-800'>LeafCrafted <span className='text-amber-500'>Marvels</span></h1>
            <h3 className='p-2 text-md text-green-800'>Uncover Our Exclusive Features</h3>
        </div>

        <div className='flex'>
            {features.map((feature_item)=>{
                return(
                    <div key={feature_item.id} className='m-4 bg-green-100 p-4'>
                        <img src={feature_item.img_src} alt='featureitem' className='h-40'/>
                        <h1> {feature_item.feature_title}</h1>
                    </div>
                )
            })}
        </div>


      
    </>
  )
}

export default FeaturesList
