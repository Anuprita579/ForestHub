import React from 'react'
import { useNavigate } from "react-router-dom";
import firebase from 'firebase/app'; // Import the necessary module
import { db } from '../Firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { navigate } from 'ionicons/icons';


export default function Addblog() {

  const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const form = event.target;
        const formData = new FormData(form);
        const userEmail = localStorage.getItem('email');
    
        const blogData = {
        //   idea: Date.now(),
          title: formData.get('title'),
          subtitle: formData.get('subtitle'),
          blogContent: formData.get('blogcontent'),
          email: userEmail,
          authname:formData.get('authname'),
          timestamp: serverTimestamp(),
          imglink:formData.get('img-link'),
        };
    
        try {
            // Use addDoc without specifying the ID
            await addDoc(collection(db, 'blogs'), blogData);
            alert('Blog added successfully!');
            navigate("/blogs");
          } catch (error) {
            console.log("error",error)
            alert('Error occured')
          }
        };
      
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
  
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Add your own blog!</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    </div>
  

    <form class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>

      <div class="sm:col-span-2">
        <label for="title" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Title</label>
        <input name="title" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div class="sm:col-span-2">
        <label for="subtitle" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Subject/Sub-title</label>
        <input name="subtitle" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div class="sm:col-span-2">
        <label for="authname" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Auther name</label>
        <input name="authname" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div class="sm:col-span-2">
        <label for="img-link" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Paste image link</label>
        <input name="img-link" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div class="sm:col-span-2">
        <label for="blogcontent" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Type your blog here</label>
        <textarea name="blogcontent" class="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
      </div>

      <div className="flex items-center justify-between sm:col-span-2">
            <button
              type="submit"
              className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              POST
            </button>

            <span className="text-sm text-gray-500">*Required</span>
          </div>

      <p class="text-xs text-gray-400">By signing up to our newsletter you agree to our <a href="#" class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>.</p>
    </form>
  
  </div>
</div>
  )
}
