import React from 'react';
import './UserCard.css';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-avatar">
        <img src={user.avatar_url} alt={user.login} />
      </div>
      <h3>{user.login}</h3>
      <a 
        href={user.html_url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="github-button"
      >
        View GitHub
      </a>
    </div>
  );
};

export default UserCard;
