import logo from './logo.svg';
import './App.css';
import AddUsers from './addUsers/AddUsers'

function App() {
  const addUser = (user) => {

  }
  
  return (
    <div className="App">
      <AddUsers onAddUser={addUser}/>
    </div>
  );
}

export default App;
