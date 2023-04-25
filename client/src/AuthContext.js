// client/src/AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if user is authenticated on page load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.post("http://localhost:8000/api/user/");
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    checkAuth();
  }, []);

  // Login user
  const login = async (username, password) => {
    try {
      const res = await axios.post("http://localhost:8000/api/user/login", {
        username,
        password,
      });
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Logout user
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
