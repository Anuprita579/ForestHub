import React, { useEffect, useState } from "react";
// import { doc, getDoc } from 'firebase/firestore';
import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../Firebase/config";

function Dashboard() {
  const [userDetails, setUserDetails] = useState({});
  const storedEmail = localStorage.getItem("email");
  const [blogs, setBlogs] = useState([]);
  const [bookings, setBookings] = useState([]);

  function encodeEmailForFirestore(email) {
    const cleanedEmail = email.replace(/"/g, "");
    const encodedEmail = cleanedEmail.replace(/[#$/[\]]/g, "_");
    const safeDocumentID = encodedEmail;

    return safeDocumentID;
  }
  const email = encodeEmailForFirestore(storedEmail);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDocRef = doc(db, "users", email);
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          console.log("User document not found in the database.");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    const fetchBlogs = async () => {
      try {
        const blogsCollection = collection(db, "blogs");
        const blogsQuery = query(
          blogsCollection,
          where("email", "==", storedEmail)
        );
        const blogsSnapshot = await getDocs(blogsQuery);

        const blogsData = [];
        blogsSnapshot.forEach((doc) => {
          blogsData.push(doc.data());
        });

   

        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    const fetchBookings = async () => {
        try {
          const bookingCollection = collection(db, "booking");
          const bookingQuery = query(
            bookingCollection,
            where("email", "==", storedEmail)
          );
        //   console.log("Booking Query:", bookingQuery); // Log the query being executed
          const bookingSnapshot = await getDocs(bookingQuery);
      
          const bookingData = [];
          bookingSnapshot.forEach((doc) => {
            bookingData.push(doc.data());
          });
      
        //   console.log("Booking Data:", bookingData); // Log the fetched data
      
          setBookings(bookingData);
        } catch (error) {
          console.error("Error fetching booking details:", error);
        }
      };
      
      
    fetchUserDetails();
    fetchBlogs();
    fetchBookings();
  }, [email]);

  return (
    <>
      <div className="min-h-screen w-full flex flex-col justify-center items-center">
        <div className=" p-5 rounded-xl w-2/3">
          <section>
            <h1 className="text-3xl font-bold mb-4" >Personal Info</h1>
            <p className="text-xl ">Full Name: <span className="text-lg text-emerald-600">{userDetails.fullName}</span></p>
            <p className="text-xl ">Email: <span className="text-lg text-emerald-600">{storedEmail}</span> </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Blogs</h2>
            <ul>
              {blogs.map((blog) => (
                <li key={blog.id} className="bg-slate-100 drop-shadow-xl shadow-black transform transition-all duration-150 hover:scale-95 p-4 m-4 rounded-xl">
                  <p className="text-lg">Title: <span className="text-md text-emerald-600">{blog.title}</span></p>
                  <p className="text-lg">Subtitle: <span className="text-md text-emerald-600">{blog.subtitle}</span></p>
                  <p className="text-lg">Author: <span className="text-md text-emerald-600">{blog.authname}</span></p>
                  <p className="text-lg">Content: <span className="text-md text-emerald-600"> {blog.blogContent}</span></p>
                </li>
              ))}
            </ul>
          </section>
          <section>
      <h2 className="text-3xl font-bold mb-4">Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id} className="bg-slate-100 drop-shadow-xl shadow-black transform transition-all duration-150 hover:scale-95 p-4 m-4 rounded-xl">
          <p className="text-lg">Full Name: <span className="text-md text-emerald-600">{booking.fullName}</span></p>
          <p className="text-lg">Contact No: <span className="text-md text-emerald-600">{booking.contactNo}</span></p>
          <p className="text-lg">Location: <span className="text-md text-emerald-600">{booking.eventDetails.location}</span> </p>
          <p className="text-lg">Title: <span className="text-md text-emerald-600">{booking.eventDetails.title}</span></p>
          <p className="text-lg">Date: <span className="text-md text-emerald-600">{booking.eventDetails.date}</span></p>
          <p className="text-lg">ID: <span className="text-md text-emerald-600">{booking.eventDetails.id}</span></p>
          {/* Add other booking details as needed */}
        </li>
        ))}
      </ul>
    </section>

        </div>
        
      </div>
    </>
  );
}

export default Dashboard;
