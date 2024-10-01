import React from 'react';

function UserDetails({ user }) {
  return (
    <div className='Details'>
      <h2>Detalle de Usuario</h2>
      <p><strong>Identificador: </strong> {user.id}</p>
      <p><strong>Nombre: </strong> {user.name}</p>
      <p><strong>Email: </strong> {user.email}</p>
    </div>
  );
}

export default UserDetails;