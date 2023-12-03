import React from "react";
import americano from "../coffee/americano.jpg";
import arabiccoffee from "../coffee/arabic-coffee.jpg";
import cappuccino from "../coffee/cappuccino2.jpg";
import latte from "../coffee/latte.jpg";
import cartado from "../coffee/Cortado.jpg";
import espresso from "../coffee/espresso.jpg";
import frappe from "../coffee/Frappe.jpg";
import macchiato from "../coffee/macchiato.jpg";
import mocha from "../coffee/mocha.jpg";
import ristretto from "../coffee/ristretto.jpg";
import turkish from "../coffee/turkish.jpg";
import { Link } from "react-router-dom";

interface menuArrayInterface {
  url: string;
  name: string;
}

const Menu = () => {
  const menuArray: menuArrayInterface[] = [
    {
      url: americano,
      name: "Americano",
    },
    {
      url: arabiccoffee,
      name: "Arabic Coffee",
    },
    {
      url: cappuccino,
      name: "Cappuccino",
    },
    {
      url: latte,
      name: "Latte",
    },
    {
      url: cartado,
      name: "Cartado",
    },
    {
      url: espresso,
      name: "Espresso",
    },
    {
      url: frappe,
      name: "Frappe",
    },
    {
      url: macchiato,
      name: "Macchiato",
    },
    {
      url: mocha,
      name: "Mocha",
    },
    {
      url: ristretto,
      name: "Ristretto",
    },
    {
      url: turkish,
      name: "Turkish",
    },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4 ">
        <div className="col-span-1 flex flex-col items-start pl-44">
          <p className="font-bold text-xl text-center mb-4">Drinks</p>
          <ul>
            {menuArray.map((items, index) => (
              <li key={index} className="mb-2 text-lg font-mono text-gray-700">
                <Link to={`/menu/${items.name.toLocaleLowerCase()}`}>
                  {items.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2">
            <p className="font-serif font-bold text-4xl pb-6 mb-3"> Menu </p>
            <p className="font-mono text-2xl pb-6 mb-3"> Drinks </p>
          <div className="grid grid-cols-2 gap-7">
            {menuArray.map((items, index) => (
              <div key={index} className="flex items-center">
                <img
                  className="w-40 h-28 rounded-full mr-2"
                  src={items.url}
                  alt="item list"
                />
                <span className="ml-5"> {items.name} </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
