"use server";
import { authService } from "./auth.service";

export const login = async (email: string, password: string) => {
  try {
    return await authService.login(email, password);
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw new Error("Failed to retrieve user data.");
  }
};

export const logout = async () => {
  try {
    return await authService.logout();
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw new Error("Failed to retrieve user data.");
  }
};

export const getCurrentUser = async () => {
  try {
    return await authService.getCurrentUser();
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw new Error("Failed to retrieve user data.");
  }
};
