import React, { useState } from "react";
import { Link } from "react-router-dom";
import tableCoffee from "../coffeeTable.jpg";
import americano from "../coffee/americano.jpg";
import arabiccoffee from "../coffee/arabic-coffee.jpg";
import cappuccino from "../coffee/cappuccino2.jpg";
import latte from "../coffee/latte.jpg";


const photoSliderArray = [
  { image: americano, type: "americano" },
  { image: arabiccoffee, type: "arabic-coffee" },
  { image: cappuccino, type: "cappuccino" },
  { image: latte, type: "latte" },
];

const Home = () => {
  const [initialState, setInitialState] = useState<number>(0);

  function handleLeft() {
    if (initialState === 0) {
      setInitialState(photoSliderArray.length - 1);
    } else {
      setInitialState((prevState) => prevState - 1);
    }
  }

  function handleRight() {
    if (initialState === photoSliderArray.length - 1) {
      setInitialState(0);
    } else {
      setInitialState((prevState) => prevState + 1);
    }
  }

  return (
    <div>
      <div>
        <img src={tableCoffee} alt="" />
      </div>
      <div>
        <p className="text-center mt-2 font-bold font-mono text-red-800">
          OUR SPECIAL
        </p>
        <div className="relative flex justify-center pr-96 h-full">
          <Link to={`/menu/${photoSliderArray[initialState].type}`}>
            <img
              src={photoSliderArray[initialState].image}
              alt=""
              className="w-96 h-72 pt-2 pb-5 z-0"
              style={{ position: "absolute" }}
            />
          </Link>
          <button
            className="left-4 top-1/2 transform -translate-y-1/2 absolute z-10 text-lg bg-gray-300 text-black px-3 py-1 rounded-full focus:outline-none hover:bg-gray-700 hover:text-white transition duration-300"
            onClick={handleLeft}
          >
            &lt;
          </button>
          <button
            className="right-4 top-1/2 transform -translate-y-1/2 absolute z-10 text-lg bg-gray-300 text-black px-3 py-1 rounded-full focus:outline-none hover:bg-gray-700 hover:text-white transition duration-300"
            onClick={handleRight}
          >
            &gt;
          </button>
        </div>
        <p className="text-center pt-72 cursor-pointer">Name: {photoSliderArray[initialState].type.toUpperCase()} </p>
      </div>
    </div>
  );
};

export default Home;
