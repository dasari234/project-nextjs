"use client";
import { useEffect, useState, useCallback } from "react";
import { User } from "@/app/services/user/user.service";
import toast from "react-hot-toast";
import { getUsers } from "../services/user/user.actions";

const HomePage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = useCallback(async () => {
    try {
      const data = await getUsers();
      setUsers(data);
      toast.success("Users fetched successfully!");
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to fetch users"
      );
      toast.error("Error fetching users.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
