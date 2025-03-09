"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  login,
  logout,
  getCurrentUser,
} from "@/app/services/auth/auth.actions";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getCurrentUser();
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleLogin = async (email: string, password: string) => {
    debugger
    try {
      const userData = await login(email, password);
      setUser(userData);
      router.push("/home");
      toast.success("Logged in successfully!");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Invalid credentials, please try again.");
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      router.push("/login");
      toast.success("Logged out successfully!");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Failed to log out, please try again.");
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login: handleLogin, logout: handleLogout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
