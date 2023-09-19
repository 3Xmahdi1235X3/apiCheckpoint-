import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import UserList from './UserList';

function App() {
  const [users,setUsers]=useState([])
  useEffect(()=>{
   
    axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
      setUsers(res.data)
    })
  },[])
  return (
    <div className="App">
        <UserList users={users}/>
    </div>
  );
}

export default App;
