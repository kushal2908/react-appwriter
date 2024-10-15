import React, { useState } from "react";
import { account } from "../../appwriter";
import { ERROR_TOAST, SUCCESS_TOAST } from "../../utils/toasts";
import { useNavigate } from "react-router-dom";
import { APP_URL } from "../../utils/app_urls";

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    account
      .createEmailPasswordSession(email, password)
      .then((res) => {
        SUCCESS_TOAST("Login Successful");
        navigate(APP_URL.DASHBOARD);
      })
      .catch((err) => {
        ERROR_TOAST(err.message);
        console.log(err);
      });
  };
  return (
    <div>
      <h1 className="font-bold text-2xl text-gray-700 text-left mb-4">Login</h1>
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
          type="submit"
          className="border bg-blue-500 rounded p-2 mb-2 w-full text-sm text-white focus:outline-none hover:bg-blue-600 "
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
