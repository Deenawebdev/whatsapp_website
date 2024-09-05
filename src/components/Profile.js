import React, { useState } from 'react';
import jackSparrowImage from '../images/jacksparrow-1.jpg'; 
import './Profile.css';

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('Jack Sparrow');
  const [status, setStatus] = useState('Available');
  const [phone, setPhone] = useState('+666 666 666');
  const [email, setEmail] = useState('Pirates of the Caribbean  @ofcl.com');

  const toggleEditing = () => {
    setEditing(!editing);
  };

  return (
    <div className='profile_page'>
      <h1>Your Profile</h1>
      <div className='profile_info'>
        <img src={jackSparrowImage} alt="Jack Sparrow" /> 
        {editing ? (
          <>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter your name'
            />
            <input
              type='text'
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              placeholder='Enter your status'
            />
            <input
              type='text'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder='Enter your phone number'
            />
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
            />
          </>
        ) : (
          <>
            <h2>{name}</h2>
            <p>Status: {status}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
          </>
        )}
        <button onClick={toggleEditing}>
          {editing ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default Profile;

