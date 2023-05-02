import React, {useState} from 'react';
import UserCard from '../UserCard/UserCard';
import './UserList.css'

function UserList() {
    const [users, setUsers] = useState([]);
  
    async function fetchUsers() {
      try {
        const response = await fetch('https://reqres.in/api/users/');
        const data = await response.json();
        setUsers(data.data);
      } catch (error) {
        console.error(error);
      }
    }
  
    function handleGetUsersClick() {
      fetchUsers();
    }
  
    return (
      <div>
        <button onClick={handleGetUsersClick}>Get Users</button>
        <div className="user-list">
          {users.map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
        </div>
      </div>
    );
  }
  
  export default UserList;