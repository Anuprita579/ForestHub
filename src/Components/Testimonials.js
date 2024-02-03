import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { id: 1, content: 'Testimonial 1 Content', author: 'Author 1' },
    { id: 2, content: 'Testimonial 2 Content', author: 'Author 2' },
    { id: 3, content: 'Testimonial 3 Content', author: 'Author 3' },
    { id: 4, content: 'Testimonial 4 Content', author: 'Author 4' },
    { id: 5, content: 'Testimonial 5 Content', author: 'Author 5' },
  ];

  return (
    <div className="w-full text-center">
      <div className="flex bg-green-200 justify-center align-middle items-center overflow-x-scroll snap-center snap-proximity ">
        {testimonials.map((testimonial) => (
            <div key={testimonial.id} className='p-4 m-4 bg-lime-900 rounded-xl min-w-80 snap-center snap-always'>
                <p className="text-lg text-slate-100">{testimonial.content}</p>
                <p className="text-slate-200">{testimonial.author}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
