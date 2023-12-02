import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Compontents/Navbar";
import Home from "./Compontents/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
