// src/components/AddBlog.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../Firebase/config';
import { addDoc, serverTimestamp, collection } from 'firebase/firestore';

const AddBlog = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
  event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const userEmail = localStorage.getItem('email');

    const blogData = {
      title: formData.get('title'),
      subtitle: formData.get('subtitle'),
      blogContent: formData.get('blogcontent'),
      email: userEmail,
      authname: formData.get('authname'),
      timestamp: serverTimestamp(),
      imglink: formData.get('img-link'),
    };

    try {
      await addDoc(collection(db, 'blogs'), blogData);
      alert('Blog added successfully!');
      navigate('/blogs');
    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred while adding the blog.');
    }
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 mx-2 md:mx-4">
      <div className="mx-auto max-w-screen-md">
        <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-800 md:mb-6 lg:text-4xl">
            Add Your Own Forest Blog!
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Share your forest exploration experiences with the world.
          </p>

          <form
            className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2 mt-4"
            onSubmit={handleSubmit}
          >
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Title
              </label>
              <input
                name="title"
                className="w-full rounded border bg-gray-50 px-2 py-1 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="subtitle"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Subject/Sub-title
              </label>
              <input
                name="subtitle"
                className="w-full rounded border bg-gray-50 px-2 py-1 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="authname"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Author Name
              </label>
              <input
                name="authname"
                className="w-full rounded border bg-gray-50 px-2 py-1 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="img-link"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Paste Image Link
              </label>
              <input
                name="img-link"
                className="w-full rounded border bg-gray-50 px-2 py-1 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="blogcontent"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Type Your Blog Here
              </label>
              <textarea
                name="blogcontent"
                className="h-40 w-full rounded border bg-gray-50 px-2 py-1 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              ></textarea>
            </div>

            <div className="flex items-center justify-between sm:col-span-2 mt-4">
              <button
                type="submit"
                className="inline-block rounded-lg bg-green-500 px-6 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base"
              >
                POST
              </button>

              <span className="text-sm text-gray-500">*Required</span>
            </div>

            <p className="text-xs text-gray-400 mt-2">
              By signing up to our newsletter you agree to our{' '}
              <h1
                className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Privacy Policy
              </h1>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;