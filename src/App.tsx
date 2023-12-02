import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Compontents/Navbar";
import Home from "./Compontents/Home";
import Cart from "./Compontents/Cart";
import SignIn from "./Compontents/SignIn";
import JoinNow from "./Compontents/JoinNow";
import Info from "./Compontents/Info";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cafein" element={<Home />}></Route>
          {/* <Route path="/menu" element={<Menu />}></Route> */}
          <Route path="/cart" element={<Cart />}></Route>
          {/* <Route path="/bookatable" element={<BookTable />}></Route> */}
          // <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/join-now" element={<JoinNow />}></Route>
          <Route path="/learn-about-coffee" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
