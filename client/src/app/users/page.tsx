"use client";

import { useEffect } from "react";
import { NextPage } from "next";
import { useGlobalContext } from "../../../context/GlobalProvider";
import api from "../../../api/axios";

interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
}

const UsersPage: NextPage = () => {
  const { user, setUser, isLoading, setIsLoading } = useGlobalContext();

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await api.get("/users", {
          headers: {
            Authorization: await user.getIdToken(),
          },
        });
        if (response.status === 200) {
          setUser(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [user, setUser, setIsLoading]);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Users</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {user?.map((user: User) => (
          <li
            key={user.uid}
            style={{ borderBottom: "1px solid #ddd", padding: "10px 0" }}
          >
            <p>
              <strong>ID:</strong> {user.uid}
            </p>
            <p>
              <strong>Name:</strong> {user.displayName}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
