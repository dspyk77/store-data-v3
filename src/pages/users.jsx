import React, { useState, useEffect } from 'react';

function Page() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users', {
        method: 'GET'
      });

      if (response.ok) {
        const users = [
          { 'id': 0, 'firstName': 'John', 'lastName': 'Doe' },
          { 'id': 1, 'firstName': 'Jane', 'lastName': 'Doe' }
        ];
        setUsers(users);
      } else {
        console.error(response);
      }
    };

    fetchUsers();
  }, []);

  const rows = [];
  for (let user of users) {
    const key = `${user.id}`;

    const row = (
      <tr key={key}>
        <td>{user.id}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
      </tr>
    );

    rows.push(row);
  }

  return (
    <>
      <h1 className="my-4 text-2xl">Users</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>

        <tbody>
          {rows}
        </tbody>
      </table>
    </>
  );
}

export default Page;
