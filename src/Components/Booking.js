import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../Firebase/config';
import { doc, setDoc,getDoc,updateDoc,addDoc,collection } from 'firebase/firestore';

export default function Booking() {
  const { id, location, title, date } = useParams();
  const storedEmail = localStorage.getItem("email");

  const [formData, setFormData] = useState({
    fullName: '',
    contactNo: '',
    state: '',
    city: '',
    address: '',
    eventDetails: { id, location, title, date },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const email = localStorage.getItem('email');
    //   const userDocRef = doc(db, 'booking',);
  
      // Fetch the existing document
    //   const userDocSnap = await getDoc(userDocRef);
  
      
        // If document doesn't exist, create a new one
        await addDoc(collection(db, 'booking'), formData);
  
      // Clear the form after successful submission
      setFormData({
        fullName: '',
        contactNo: '',
        state: '',
        city: '',
        address: '',
        eventDetails: { id, location, title, date },
      });
  
      console.log('Data successfully saved to Firestore!');
    } catch (error) {
      console.error('Error saving data to Firestore:', error);
    }
  };
  useEffect(() => {
    // Set initial values for location, title, and date from the URL
    setFormData((prevFormData) => ({
      ...prevFormData,
      eventDetails: { id, location, title, date },
      email:storedEmail,
    }));
  }, [id, location, title, date]);
  return (
    <>
      <section className="bg-white ">
      
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
          </p>
         <form onSubmit={handleSubmit} className="space-y-8">
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white dark:text-gray-900">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter your name "
                required
              />
            </div>

          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white dark:text-gray-900">
                Contact no
              </label>
              <input
                type="text"
                id="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter your contactNo "
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white dark:text-gray-900">
                State
              </label>
              <input
                type="text"
                id="state"
                value={formData.state}
                onChange={handleChange}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="State"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white dark:text-gray-900">
                city
              </label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={handleChange}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="City"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white dark:text-gray-900">
                Address
              </label>
              <input
                type="text"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}