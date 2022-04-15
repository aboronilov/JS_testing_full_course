import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} data-testid="user-item">
          {user.name}
        </div>
      ))}
    </div>
  );
}
