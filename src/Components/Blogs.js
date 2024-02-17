// src/components/Blogs.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../Firebase/config';
import { collection, getDocs } from 'firebase/firestore';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'blogs'));
        const blogsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogsData);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 min-h-screen">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-800 md:mb-6 lg:text-4xl">
            Explore Forest Blogs
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-600 md:text-lg">
            Discover fascinating insights about forests and their importance.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-8">
          {blogs.map((blog, index) => (
            <Link
              key={blog.id}
              to={`/readblog/${blog.id}`}
              className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl md:h-80 xl:h-96 transition-transform transform hover:scale-105"
            >
              <img
                src={`https://source.unsplash.com/400x300/?forest&sig=${blog.id}`}
                loading="lazy"
                alt={`Photofor${blog.title}`}
                className="h-48 w-full object-cover object-center rounded-t-lg"
              />

              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <span className="block text-sm text-gray-600">
                    {blog.date}
                  </span>
                  <h2 className="mt-2 text-xl font-semibold text-gray-800">
                    {index === 4 ? 'Exploring Forest Habitats' : blog.title || 'Forest Exploration'}
                  </h2>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                    {blog.description ||
                      'Discover the wonders of the forest and its rich biodiversity. Explore the hidden gems and ecological importance of these lush landscapes.'}
                  </p>
                </div>

                <Link
                  to={`/readblog/${blog.id}`}
                  className="mt-4 text-sm font-semibold text-indigo-600 hover:underline"
                >
                  Read more
                </Link>
              </div>
            </Link>
          ))}

          {/* Additional card for the second row */}
          <Link
            to="/"
            className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl md:h-80 xl:h-96 transition-transform transform hover:scale-105"
          >
            <img
              src="https://source.unsplash.com/400x225/?forest&sig=additional"
              loading="lazy"
              alt="ForestImage"
              className="h-48 w-full object-cover object-center rounded-t-lg"
            />

            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h2 className="mt-2 text-xl font-semibold text-gray-800">
                  The Enchanting Forests
                </h2>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  Explore the beauty and biodiversity of forests around the world. Immerse yourself in the magical world of towering trees and vibrant ecosystems.
                </p>
              </div>

              <Link
                to="/"
                className="mt-4 text-sm font-semibold text-indigo-600 hover:underline"
              >
                Read more
              </Link>
            </div>
          </Link>
        </div>

        <div className="flex items-center justify-between sm:col-span-2 mt-8">
          <Link to="/addblog">
            <button
              type="submit"
              className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              Add Blog
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
