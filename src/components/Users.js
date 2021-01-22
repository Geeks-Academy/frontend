import React from "react";
import Link from 'next/link'

const Users = () => {
  const users = [
    {
      id: 1,
      name: "Programmer",
      surname: "Only",
    },
    {
      id: 2,
      name: "Programmer 2",
      surname: "Only 2",
    },
  ];

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}><Link href={`/users/${user.id}`}>
            <a>{user.name}</a>
          </Link>
          </li>
        ))}
      </ul>
      <Link href="/">back to main page</Link>
    </div>
  );
};

export default Users;
