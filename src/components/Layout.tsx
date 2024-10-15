import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { account } from "../appwriter";
import { APP_URL } from "../utils/app_urls";

interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  if (!isAuthenticated) {
    return null;
  }
  const handleLogout = async () => {
    try {
      const res = await account.deleteSession("");
      navigate(APP_URL.INDEX);
    } catch (error) {}
  };
  return (
    <>
      <header className="border-b border-gray-300 ">
        <div className="flex justify-between items-center px-6 py-2">
          <h1 className="font-bold text-xl text-gray-600">Logo</h1>
          <div>
            <button
              className="border border-red-300 rounded p-2 text-xs text-red-600 font-semibold hover:bg-red-50"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="bg-gray-100 min-h-screen">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
