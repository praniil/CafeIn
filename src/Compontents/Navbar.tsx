import React from "react";
import { Link } from "react-router-dom";

const navbarElements: string[] = [
  "Menu",
  "Cart",
  "Book A Table",
  "Learn About Coffee",
  "Pin Your Location"
];

interface signnedIn {
  passSignIn: {
    signedIn: boolean;
    setSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
  };
}
const Navbar: React.FC<signnedIn> = (props) => {
  const { signedIn, setSignedIn } = props.passSignIn;
  return (
    <div className="text-black">
      <div className="container mx-auto">
        <ul className="flex justify-between items-center mb-3">
          <li>
            <Link to="/" className="text-2xl font-bold pl-6 hover:text-red-950">
              CafeIn
            </Link>
          </li>
          <div className="flex items-center space-x-8">
            {navbarElements.map((element, index) => (
              <li key={index} className="mx-3">
                <Link
                  to={`/${element.toLowerCase().replaceAll(" ", "-")}`}
                  className="hover:text-red-950"
                >
                  {element}
                </Link>
              </li>
            ))}
          </div>
          <div className="flex items-center space-x-6 pr-4">
            <div className="flex h-full">
              {!signedIn ? (
                <li className="bg-red-950 text-white p-1 h-full mr-2 pl-2 pr-2">
                  <Link
                    to="/sign-in"
                    className="text-lg font-medium h-full flex items-center"
                  >
                    Sign In
                  </Link>
                </li>
              ) : (
                <li>Welcome</li>
              )}
              <li className="bg-red-950 text-white p-1 h-full mr-2 pl-2 pr-2">
                <Link
                  to="/join-now"
                  className="text-lg font-medium h-full flex items-center"
                >
                  Join Now
                </Link>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
