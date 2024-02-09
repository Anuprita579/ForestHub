import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImage from '../assests/login.jpeg';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../Firebase/config';

function Registration() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleAddUser = async () => {
    if (fullName.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
      if (password === confirmPassword) {
        const userDetails = {
          fullName: fullName,
        //   email: email,
          password: password,
          createdAt: serverTimestamp(),
        };

        const docRef = doc(db, 'users', email);

        try {
          await setDoc(docRef, userDetails);
          alert('User added successfully!');
          // Reset input fields after successful addition
          setFullName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          navigate('/login');
        } catch (error) {
          console.error('Error adding user:', error.message);
        }
      } else {
        alert('Passwords do not match!');
      }
    } else {
      alert('Please enter all details');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Half */}
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4">Join the Green Community</h1>
          <h2 className="text-sm mb-4">Your first step towards preserving our forests</h2>
          {/* ... (your Google sign up button) */}
          <div className="flex items-center w-full mb-4">
            <hr className="flex-1 border-gray-400" />
            <span className="mx-4 text-gray-400">Or</span>
            <hr className="flex-1 border-gray-400" />
          </div>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="border-gray-300 border rounded-md px-4 py-2 mb-4 w-full"
            placeholder="Full Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-gray-300 border rounded-md px-4 py-2 mb-4 w-full"
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-gray-300 border rounded-md px-4 py-2 mb-4 w-full"
            placeholder="Password"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border-gray-300 border rounded-md px-4 py-2 mb-4 w-full"
            placeholder="Confirm Password"
          />
          <button
            onClick={handleAddUser}
            className="bg-green-800 text-white px-4 py-2 rounded-md w-full hover:bg-amber-300 hover:text-green-800"
          >
            Register
          </button>
          <p className="mt-4">
            Already have an account? <a href="/login" className="text-green-800">Sign in</a>
          </p>
        </div>
      </div>
      {/* Right Half */}
      <div className="flex-1">
        <img
          src={loginImage}
          alt="Registration Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Registration;
