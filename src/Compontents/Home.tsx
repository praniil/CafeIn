import React from "react";
import { Link } from "react-router-dom";
import tableCoffee from "../coffeeTable.jpg";
import americano from "../coffee/americano.jpg";
import arabiccoffee from "../coffee/arabic-coffee.jpg";
import cappuccino from "../coffee/cappuccino2.jpg";
import latte from "../coffee/latte.jpg";
import cortado from "../coffee/Cortado.jpg";
import espresso from "../coffee/espresso.jpg";
import frappe from "../coffee/Frappe.jpg";
import macchiator from "../coffee/macchiato.jpg";
import mocha from "../coffee/mocha.jpg";
import ristretto from "../coffee/ristretto.jpg";
import turkish from "../coffee/turkish.jpg";

const photoSliderArray = [
  { image: americano, type: "americano" },
  { image: arabiccoffee, type: "arabic-coffee" },
  { image: cappuccino, type: "cappuccino" },
  { image: latte, type: "latte" },
];

const Home = () => {
  return (
    <div>
      <div>
        <img src={tableCoffee} alt="" />
      </div>
      <div>
        <p className="text-center mt-2 font-bold font-mono text-red-800">
          {" "}
          OUR SPECIAL COFFEE
        </p>
        <div className="relative flex justify-center pr-96 h-full">
          <Link to={`/menu/${photoSliderArray[0].type}`}>
            <img
              src={photoSliderArray[0].image}
              alt=""
              className="w-96 h-auto pt-2 pb-5 z-0"
              style={{ position: "absolute" }}
            />
          </Link>
          <button className="left-64 top-40 absolute z-10 text-2xl"> &lt;</button>
          <button className="right-64 top-40 absolute z-10 text-2xl ">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
