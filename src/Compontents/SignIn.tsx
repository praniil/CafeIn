import React, { useState } from "react";
import axios from "axios";

interface signin {
  username: string;
  email: string;
  password: string;
}
const SignIn = () => {
  const [signInInfo, setSignInInfo] = useState<signin>({
    username: "",
    email: "",
    password: "",
  });
  const [submit, setSubmit] = useState<boolean>(false);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setSignInInfo({ ...signInInfo, [name]: value });
  }
  async function handleSignIn(event: React.FormEvent) {
    event.preventDefault();
    setSubmit(true);
    console.log(submit);
    console.log("signInInfo:", signInInfo);
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form className="w-full max-w-sm p-4 bg-white shadow-md rounded-lg">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={signInInfo.username}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={signInInfo.email}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={signInInfo.password}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSignIn}
          className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
