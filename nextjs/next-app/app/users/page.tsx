import React from 'react';

interface User {
  id: number;
  name: string;
}

export default async function UsersPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  });
  const userData: User[] = await response.json();

  return (
    <ul>
      {userData.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
