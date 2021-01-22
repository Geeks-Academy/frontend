import React from "react";
import { useRouter } from "next/router";
import Link from 'next/link'

const User = () => {
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

  const router = useRouter();
  const { id } = router.query;
  const user = users.find((user) => (user.id === Number(id) ? user : null));
  console.log(id);

  console.log(user);
  return (
    <div>
      {user && (
        <>
          <h1>id: {user.id}</h1> <h1>name: {user.name}</h1>{" "}
          <h1> surname: {user.surname}</h1>
        </>
      )}
      <Link href="/po/users">back to users</Link>
    </div>
  );
};

export default User;
