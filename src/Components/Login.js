import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImage from '../assests/login.jpeg';
import { db } from '../Firebase/config';
import { doc, getDoc } from 'firebase/firestore';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await handleLogin(email, password);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  async function handleLogin(email, pass) {
    try {
      if (email !== '' && password !== '') {
        // Encode the email to create a valid Firestore document ID
        
        console.log(email)
        const documentRef = doc(db, 'users', email);
        const docSnap = await getDoc(documentRef);
  
        if (docSnap.exists()) {
          const data = docSnap.data();
          const dbPass = data.password;
  
          if (dbPass === pass) {
            localStorage.setItem('email', JSON.stringify(email));
            console.log('Successful login');
            alert('Successful login');
            navigate('/');
          } else {
            alert('Invalid password');
          }
        } else {
          alert('User not found');
        }
      } else {
        alert('Please enter all the details');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  }
  

  return (
    <div className="flex h-screen">
      {/* Left Half */}
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4">Enroot your Account</h1>
          <h2 className="text-sm mb-4">Your First Step in the Nature Trail Journey.</h2>
          <button className="bg-black text-white px-4 py-2 rounded-md mb-4 w-full flex items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png"
              alt="Google Icon"
              className="w-6 h-6 mr-2"
            />
            Sign in with Google
          </button>
          <div className="flex items-center w-full mb-4">
            <hr className="flex-1 border-gray-400" />
            <span className="mx-4 text-gray-400">Or</span>
            <hr className="flex-1 border-gray-400" />
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="border-gray-300 border rounded-md px-4 py-2 mb-4 w-full"
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="border-gray-300 border rounded-md px-4 py-2 mb-4 w-full"
              placeholder="Password"
            />
            <button
              type="submit"
              className="bg-green-800 text-white px-4 py-2 rounded-md w-full hover:bg-amber-300 hover:text-green-800"
            >
              Sign In
            </button>
          </form>
          <p className="mt-4">
            Don't have an account? <a href="/registration" className="text-green-800">Sign up</a>
          </p>
        </div>
      </div>

      {/* Right Half */}
      <div className="flex-1">
        <img
          src={loginImage} // Use the imported local image variable
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Login;
