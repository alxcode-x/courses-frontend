import logo from './logo.svg';
import AddUsers from './components/users/addUsers/AddUsers';
import UsersList from './components/users/usersList/UsersList';
import './App.css';

function App() {
  const addUser = (user) => {

  }
  
  return (
    <div className="App">
      <AddUsers onAddUser={addUser} />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
