import React, { useState } from 'react'
import AddUsers from './components/users/addUsers/AddUsers';
import UsersList from './components/users/usersList/UsersList';
import './App.css';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (user) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, user]
    })
  }
  
  return (
    <div className="App">
      <AddUsers onAddUser={addUserHandler} />
      {usersList.length && <UsersList users={usersList} />}
    </div>
  );
}

export default App;
