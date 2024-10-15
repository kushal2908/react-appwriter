import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { APP_URL } from "../../utils/app_urls";
type Props = {};

export default function Auth({}: Props) {
  const { isAuthenticated } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  if (isAuthenticated) {
    return <Navigate to={APP_URL.DASHBOARD} />;
  }
  return (
    <div className={"flex flex-col justify-center items-center h-screen bg-gray-100"}>
      <div
        className={
          "flex justify-start items-center p-4 h-screen/2 w-[320px] bg-white border border-gray-300 rounded mb-4"
        }
      >
        {isLogin ? <Login /> : <Signup isSignupSuccess={() => setIsLogin(true)} />}
      </div>
      <div className={"flex justify-center items-center p-4 w-[320px] bg-white border border-gray-300 text-sm rounded"}>
        <span>
          {isLogin ? "Don't " : "Already"} have an acount?{" "}
          <span className="text-blue-500 font-bold hover:cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up " : "Login"}
          </span>{" "}
        </span>
      </div>
    </div>
  );
}
