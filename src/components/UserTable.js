import React from 'react';

function UserTable({ users, onUserClick }) {
  return (
    <div>
      <h2>Listado de Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>Identificador</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <a href="#" onClick={() => onUserClick(user.id)}>
                  {user.name}
                </a>
              </td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;