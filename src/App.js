import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function App() {
  
  return (
    <div className="w-full h-screen">
      <Header />
      <Outlet />
      <Footer />

    </div>
    
  )
}