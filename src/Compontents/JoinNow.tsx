import React, { useState } from "react";
import axios from "axios";

interface joinNow {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const JoinNow = () => {
  const [signUpInfo, setsignUpInfo] = useState<joinNow>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [submit, setSubmit] = useState<boolean>(false);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setsignUpInfo({ ...signUpInfo, [name]: value });
  }
  async function handlesignUp(event: React.FormEvent) {
    try {
    event.preventDefault();
    setSubmit(true);
    console.log(submit);
      const response = await axios.post("http://localhost:8080/api/join-now", {
        username: signUpInfo.username,
        email: signUpInfo.email,
        password: signUpInfo.password,
        confirmPassword: signUpInfo.confirmPassword,
      });
      if (response.status === 200) {
        console.log("data sent to the backend successfully");
      }
    } catch (error) {
      console.error("failed to send the data to backend: ", error);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form className="w-full max-w-sm p-4 bg-white shadow-md rounded-lg">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={signUpInfo.username}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={signUpInfo.email}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={signUpInfo.password}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="confirmPassword"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={signUpInfo.confirmPassword}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handlesignUp}
          className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Join Now
        </button>
      </form>
    </div>
  );
};

export default JoinNow;
