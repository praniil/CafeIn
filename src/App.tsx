import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Compontents/Navbar";
import Home from "./Compontents/Home";
import Cart from "./Compontents/Cart";
import SignIn from "./Compontents/SignIn";
import JoinNow from "./Compontents/JoinNow";
import Info from "./Compontents/Info";
import Menu from "./Compontents/Menu";
import Americano from "./Compontents/CoffeeTypes/Americano";



function App() {
  const [signedIn, setSignedIn] = useState<boolean>(false);
  // const [signInInfo, setSignInInfo] = useState<signin>({
  //   username: "",
  //   password: "",
  // });
  return (
    <>
      <BrowserRouter>
        <Navbar passSignIn ={{signedIn, setSignedIn}} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cafein" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          {/* <Route path="/bookatable" element={<BookTable />}></Route> */}
          <Route
            path="/sign-in"
            element={<SignIn passSignIn={{ signedIn, setSignedIn }} />}
          ></Route>
          <Route path="/join-now" element={<JoinNow />}></Route>
          <Route path="/learn-about-coffee" element={<Info />} />
          <Route path="/menu/americano" element={<Americano />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
