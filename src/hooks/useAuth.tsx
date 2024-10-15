import React, { useEffect, useState } from "react";
import { account } from "../appwriter";
import { useNavigate } from "react-router-dom";
import { APP_URL } from "../utils/app_urls";

export default function useAuth() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const chechAuthentication = async () => {
    try {
      const user = await account.get();
      setIsAuthenticated(true);
    } catch (err) {
      setIsAuthenticated(false);
      navigate(APP_URL.INDEX);
    }
  };

  useEffect(() => {
    chechAuthentication();
  }, []);

  return {
    isAuthenticated,
  };
}
