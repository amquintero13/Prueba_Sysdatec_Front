import React, { useState, useEffect } from 'react';
import UserTable from './components/UserTable';
import UserForm from './components/UserForm';
import UserDetails from './components/UserDetails';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // URL de la API
  const apiUrl = 'http://localhost:34864/api/User';

  // Cargar lista de usuarios al inicio
  useEffect(() => {
    fetchUsers();
  }, []);

  // Obtener usuarios de la API
  const fetchUsers = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error obteniendo usuarios:', error);
    }
  };

  // Crear un nuevo usuario
  const addUser = async (newUser) => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      if (response.ok) {
        fetchUsers(); // Recargar la lista de usuarios
      } else {
        console.error('Error creando usuario');
      }
    } catch (error) {
      console.error('Error creando usuario:', error);
    }
  };

  // Manejar selección de un usuario específico
  const handleUserClick = (userId) => {
    const user = users.find((u) => u.id === userId);
    setSelectedUser(user);
  };

  return (
    <div className="App">
      <div className='Header'> 
      <img src='/Usuarios.png' width={100} height={100} alt='Usuario'></img>
      <h1>Manejo de Usuarios</h1>
      </div>
      
      <UserForm addUser={addUser} />

      <UserTable users={users} onUserClick={handleUserClick} />

      {selectedUser && <UserDetails user={selectedUser} />}
    </div>
  );
}

export default App;