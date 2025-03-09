"use client";
import React from "react";
import { useAuthContext } from "@/app/contexts/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuthContext();

  return (
    <nav>
      {user ? (
        <div>
          <span>Welcome, {user.email}</span>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <span>Please log in</span>
      )}
    </nav>
  );
};

export default Navbar;
