import React from 'react';

function User({ user, onRemove, onToggle }) {
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
            >
                {user.username}
            </b>

            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }) {

    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} />// map은 key를 반드시 같이 써야 함
                // <User user={user} key={user.id}/>// map은 key를 반드시 같이 써야 함
            ))}
        </div>
    );
}

export default UserList;