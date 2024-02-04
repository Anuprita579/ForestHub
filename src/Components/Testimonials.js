import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1, 
      content: "ForestHub has completely transformed the way I connect with nature. The platform's commitment to environmental awareness and sustainable practices is truly inspiring. It is a hub for like-minded individuals passionate about preserving our forests and creating a greener future.", 
      img_src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww",
      author: "Sylvia Green",
    },
    {
      id: 2, 
      content: "Being a part of ForestHub has been an incredible journey. The platform not only fosters a sense of community but also educates and empowers users to make a positive impact on our environment. I'm proud to be associated with such a meaningful initiative.", 
      img_src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      author: "Eva Meadow" 
    },
    { 
      id: 3, 
      content: "ForestHub is more than just a platform; it's a movement. I've discovered new ways to contribute to environmental conservation, and the community support is unparalleled. Together, we can make a lasting difference for our planet.", 
      img_src: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      author: "Jordan Pine" 
    },
    { 
      id: 4, 
      content: "As a nature enthusiast, ForestHub has become my go-to place for connecting with fellow nature lovers and staying informed about conservation efforts. The platform's user-friendly interface and wealth of resources make it a valuable tool for anyone passionate about preserving our forests.", 
      img_src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      author: "Emily Rivers" 
    },
    { 
      id: 5, 
      content: "ForestHub has redefined my relationship with nature. The diverse range of initiatives, from tree planting campaigns to wildlife conservation projects, makes it a comprehensive platform for anyone looking to make a positive impact on the environment. I'm grateful to be part of this eco-conscious community.", 
      img_src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
      author: "Alex Woods"
    },
  ];

  return (
    <>
      <h1 className='text-4xl font-bold text-green-800 my-5'><span className='text-amber-500'>Praises ? </span>We've collected a few</h1>



      <div className="w-full text-center">
        <div className="flex bg-green-100 py-10 align-middle items-center overflow-x-scroll snap-x snap-mandatory scroll-m-0">
          {testimonials.map((test) => (
              <div key={test.id} className='p-4 m-4 flex flex-col justify-center items-center bg-lime-900 rounded-xl min-w-80 snap-center snap-always'>
                  <p className="text-slate-200 min-h-60 italic">&ldquo; {test.content} &rdquo;</p>
                  <img src={test.img_src} alt='person' className='h-20 w-20 rounded-full border-2 border-green-100 p-2'/>
                  <p className="text-slate-200"> &mdash; {test.author}</p>
              </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
