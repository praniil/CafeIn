import React from "react";
import { Link } from "react-router-dom";
import coffeeTypes from "../typescoffee.png";
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

const photoSliderArray: string[] = [americano, arabiccoffee, cappuccino, latte];

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
        <Link to={`/menu/${photoSliderArray[0]}`}>
          <img
            className="w-96 h-auto m-auto pt-2 pb-5"
            src={photoSliderArray[0]}
            alt=""
          />
        </Link>
        <button className="absolute top-1/2 left-2 transform -translate-y-1/2">
          L
        </button>
        <button className="absolute top-1/2 right-2 transform -translate-y-1/2">
          R
        </button>
      </div>
    </div>
  );
};

export default Home;
