import { IonIcon } from '@ionic/react';
import { chevronUpCircleOutline } from 'ionicons/icons';
import React, { useState } from 'react';

const items = [
    { 
        title: 'What is the refund policy at GreenGuide?', 
        content: "The refund policy at GreenGuide ensures customer satisfaction by offering hassle-free returns within a specified timeframe. If you're not completely satisfied with your purchase, you can request a refund, provided the product meets the criteria outlined in our policy. Our aim is to make your shopping experience with us enjoyable and risk-free, ensuring you can shop confidently knowing your satisfaction is our priority." 
    },
    { 
        title: 'What if the product is not delivered at the intended delivery date?', 
        content: "If your product isn't delivered on time, please contact our customer support team with your order details for prompt assistance. We're committed to resolving any delivery issues swiftly and ensuring your satisfaction." 
    },
    { 
        title: 'What if I am not satisfied with the quality of the product?', 
        content: "If you're unhappy with a product's quality, contact our support team for a quick resolution. We're here to ensure you're satisfied with your purchase through easy returns or exchanges." 
    },
    { 
        title: 'Will there be guide with the seed packets?', 
        content: "Yes, our seed packets come with planting guides, offering essential tips for successful growth. From planting depth to watering schedules, our guides provide everything you need to cultivate vibrant plants." 
    },
    { 
        title: 'How do I redeem the discount coupons?', 
        content: 'To redeem a discount coupon, enter the code during checkout and click "Apply". Terms may apply.' 
    },
];

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const onItemClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='flex flex-col justify-center w-full items-center'>
            <h1 className='text-4xl font-bold text-green-800 my-4'>F<span className='text-amber-500'>A</span>Q</h1>
            {items.map((item, index) => (
                <div key={index} className='mb-2 w-2/3'>
                    <div onClick={() => onItemClick(index)} className='cursor-pointer p-2 border-2 bg-slate-600 flex w-full transform   transition-all duration-500' style={{backgroundColor: activeIndex === index ? '#eaeaea' : 'transparent'}}>
                        <h1 className='text-left w-full'>{item.title}</h1>
                        <h1 className={`text-right transition-transform duration-500 ${activeIndex === index ? 'rotate-180' : ''}`}> <IonIcon icon={chevronUpCircleOutline}></IonIcon></h1>
                    </div>
                    {activeIndex === index && (
                        <div className='p-2 border-2 border-slate-200 text-left'>
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default FAQ;
