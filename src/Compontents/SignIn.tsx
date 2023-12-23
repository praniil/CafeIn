import axios from "axios";
import React, { SetStateAction, useState } from "react";
import { Navigate } from "react-router-dom";

interface signin {
  username: string;
  password: string;
}
interface signnedIn {
  passSignIn: {
    signedIn: boolean;
    setSignedIn: React.Dispatch<SetStateAction<boolean>>;
  };
}
const SignIn: React.FC<signnedIn> = (props) => {
  const [signInInfo, setSignInInfo] = useState<signin>({
    username: "",
    password: "",
  });

  const { signedIn, setSignedIn } = props.passSignIn;
  const [submit, setSubmit] = useState<boolean>(false);
  const [redirectHome, setRedirectHome] = useState<boolean>(false);
  const [message, setMessage] = useState<String | null>("");
  if (signedIn) {
    setTimeout(() => {
      setRedirectHome(true);
    }, 1000);
  }

  if (redirectHome) {
    return <Navigate to="/" replace />;
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setSignInInfo({ ...signInInfo, [name]: value });
  }
  async function handleSignIn(event: React.FormEvent) {
    event.preventDefault();
    setSubmit(true);
    console.log(submit);
    console.log("signInInfo:", signInInfo);
    try {
      const response = await axios.post("http://localhost:8080/api/sign-in", {
        username: signInInfo.username,
        password: signInInfo.password,
      });
      if (response.status === 200) {
        setSignedIn(true);
        setMessage("Successfully Signned In! ");
      }
    } catch (error) {
      console.error("failed to get the data from backend: ", error);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">{message}</h1>
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
