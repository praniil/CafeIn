import React from "react";
import { Link } from "react-router-dom";

const navbarElements: string[] = ["Menu", "Cart", "Book A Table", "Learn About Coffee"];

const Navbar = () => {
  return (
    <div className="bg-red-950 text-white">
      <div className="container mx-auto">
        <ul className="flex justify-between items-center h-16">
          <li>
            <Link to="/" className="text-2xl font-bold pl-6">
              CafeIn
            </Link>
          </li>
          <div className="flex items-center space-x-8">
            {navbarElements.map((element, index) => (
              <li key={index} className="mx-3">
                <Link
                  to={`/${element.toLowerCase().replaceAll(" ", "-")}`}
                  className="hover:text-gray-300"
                >
                  {element}
                </Link>
              </li>
            ))}
          </div>
          <div className="flex items-center space-x-6 pr-4">
            <li>
              <Link to="/sign-in" className="text-lg font-medium ">
                Sign In
              </Link>
            </li>
            <li>
              <Link to="/join-now" className="text-lg font-medium">
                Join Now
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
