import React, { useState } from 'react';

function UserForm({ addUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que el nombre tenga al menos 3 caracteres
    if (name.length < 3) {
      alert('El Nombre debe contener al menos 3 caracteres.');
      return;
    }

    // Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Dirección de Email no valida.');
      return;
    }

    // Crear el nuevo usuario
    const newUser = { name, email };
    addUser(newUser);

    // Limpiar el formulario
    setName('');
    setEmail('');
  };

  return (
    <div>
      <h2>Nuevo Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email:&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Agregar Usuario</button>
      </form>
    </div>
  );
}

export default UserForm;