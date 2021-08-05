import { useState } from 'react';
import './App.css';
import ListUsers from './components/Users/ListUsers/ListUsers';
import NewUser from './components/Users/NewUser/NewUser';

const USERS = [
  {
    id: Math.random().toString(),
    name: 'Alma',
    age: 27
  }, 
  {
    id: Math.random().toString(),
    name: 'Alejandro',
    age: 29
  }
];

function App() {
  const [users, setUsers] = useState(USERS);
  const onAddUserHandler = (user) => {
    setUsers(prevUsers => {
      return[user, ...prevUsers]
    })
  };

  return (
    <div>
      <NewUser onAddUser={onAddUserHandler}/>
      <ListUsers users={users}/>
    </div>
  );
}

export default App;
