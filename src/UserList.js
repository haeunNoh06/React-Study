import React from 'react';

function User({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList({users}) {
    
      return (
        <div>
            {users.map((user, index) => (
                <User user={user} key={index}/>// map은 key를 반드시 같이 써야 함
                // <User user={user} key={user.id}/>// map은 key를 반드시 같이 써야 함
            ))}
        </div>
      )
}

export default UserList;