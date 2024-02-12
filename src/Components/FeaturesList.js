import React from 'react'
import { Link } from 'react-router-dom';

const features = [
    {
        id: "001",
        img_src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2F2ZSUyMGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
        feature_title: "Why Preserve"
    },
    {
        id: "002",
        img_src: "https://img.freepik.com/free-vector/retinal-biometric-scan-vector-cyber-security-technology_53876-112197.jpg?size=626&ext=jpg&ga=GA1.1.693548172.1671363486&semt=ais",
        feature_title: "Image Analyzer"
    },
    {
        id: "003",
        img_src: "https://images.unsplash.com/photo-1545504951-cf047e1d1d94?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        feature_title: "Plantopia"
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
                    <>
                    <Link to={`/feature/${feature_item.feature_title.toLowerCase().replaceAll(' ', '-')}`}>
                        <div key={feature_item.id} className='m-4 bg-green-100 p-4'>
                            <img src={feature_item.img_src} alt='featureitem' className='h-40 w-32'/>
                            <h1> {feature_item.feature_title}</h1>
                        </div>
                    </Link>        
                    </>
                    
                )
            })}
        </div>


      
    </>
  )
}

export default FeaturesList
