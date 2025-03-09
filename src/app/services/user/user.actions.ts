"use server";

import { userService } from "./user.service";

export const getUsers = async() => {
  try {
    return await userService.getUsers();
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw new Error("Failed to retrieve user data.");
  }
}
