import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
// import './App.css'
import Home from "./pages/Home";
import Footer from "./components/footer/Footer"
function App() {
  const title = "HospEase";
  return (
    <>
     <NavBar title={title} />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer title={title} />
    </>
  )
}
export default App
