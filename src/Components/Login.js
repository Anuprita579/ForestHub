import React from 'react';
import loginImage from '../assests/login.jpeg'; // Import the local image

function Login() {
  return (
    <div className="flex h-screen">
      {/* Left Half */}
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4">Enroot your Account </h1>
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
          <input type="email" className="border-gray-300 border rounded-md px-4 py-2 mb-4 w-full" placeholder="Email" />
          <input type="password" className="border-gray-300 border rounded-md px-4 py-2 mb-4 w-full" placeholder="Password" />
          <button className="bg-green-800 text-white px-4 py-2 rounded-md w-full hover:bg-amber-300 hover:text-green-800">Create Account</button>
          <p className="mt-4">Already have an account? <a href="#" className="text-green-800">Sign in</a></p>
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

export default Login