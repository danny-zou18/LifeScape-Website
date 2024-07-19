import { mockUsers } from "./mockUsers";
import { NextPage } from "next";

interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
}

const UsersPage: NextPage = () => {
  const users: User[] = mockUsers;

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Users</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {users.map((user) => (
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
    </div>d``
  );
};

export default UsersPage;
