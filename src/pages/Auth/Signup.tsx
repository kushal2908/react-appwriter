import { ID } from "appwrite";
import React, { useState } from "react";
import { account } from "../../appwriter";
import { ERROR_TOAST, SUCCESS_TOAST } from "../../utils/toasts";

type Props = {
  isSignupSuccess: () => void;
};

export default function Signup({ isSignupSuccess }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    account
      .create(ID.unique(), email, password)
      .then((res) => {
        if (res.status) {
          SUCCESS_TOAST("Signup Successful");
          return isSignupSuccess();
        }
      })
      .catch((err) => {
        console.log(err);
        ERROR_TOAST(err.message);
      });
  };
  return (
    <div>
      <h1 className="font-bold text-2xl text-gray-700 text-left mb-4"> Sign up</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded p-2 mb-2 w-full text-sm focus:outline-none focus:border-blue-600"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded p-2 mb-2 w-full text-sm focus:outline-none focus:border-blue-600"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="button"
          className="border bg-blue-500 rounded p-2 mb-2 w-full text-sm text-white focus:outline-none hover:bg-blue-600"
          onClick={handleSignup}
        >
          Sign up
        </button>
      </form>
    </div>
  );
}
