"use client";

import { useEffect } from "react";
import { NextPage } from "next";
import { useGlobalContext } from "../../../context/GlobalProvider";
import api from "../../../api/axios";

interface User {
  id: string;
  email: string | null;
  username: string | null;
}

const UsersPage: NextPage = () => {
  const { user, setUser, isLoading, setIsLoading } = useGlobalContext();

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await api.get("/general/getallusers");
        if (response.status === 200) {
          setUser(response.data);
        }
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Users</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {Array.isArray(user) &&
            user.map((user: User) => (
              <li
                key={user.id}
                style={{ borderBottom: "1px solid #ddd", padding: "10px 0" }}
              >
                <p>
                  <strong>ID:</strong> {user.id}
                </p>
                <p>
                  <strong>Name:</strong> {user.username}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default UsersPage;
