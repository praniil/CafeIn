import React from "react";
import coffeeTypes from "../typescoffee.png";
import tableCoffee from "../coffeeTable.jpg";
import americano from "../coffee/americano.jpg";
import arabiccoffee from "../coffee/arabic-coffee.jpg";
import cappuccino from "../coffee/cappuccino2.jpg";
import cortado from "../coffee/Cortado.jpg";
import espresso from "../coffee/espresso.jpg";
import frappe from "../coffee/Frappe.jpg";
import latte from "../coffee/latte.jpg";
import macchiator from "../coffee/macchiato.jpg";
import mocha from "../coffee/mocha.jpg";
import ristretto from "../coffee/ristretto.jpg";
import turkish from "../coffee/turkish.jpg";

const photoSliderArray = [
  {
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstocksnap.io%2Fsearch%2Fcoffee&psig=AOvVaw33oUYKy01JbvkoNMYQZdLQ&ust=1701618730573000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCKjk3PGN8YIDFQAAAAAdAAAAABAJ",
  },
  {
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstocksnap.io%2Fsearch%2Fcoffee&psig=AOvVaw33oUYKy01JbvkoNMYQZdLQ&ust=1701618730573000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCKjk3PGN8YIDFQAAAAAdAAAAABAJ",
  },
];

const Home = () => {
  return (
    <div>
      <div>
        <img src={tableCoffee} alt="" />
      </div>
      <div>
        {photoSliderArray.map((photo, index) => (
          <div>
            {" "}
            <img key={index} src={photo.url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
