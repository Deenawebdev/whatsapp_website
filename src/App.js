import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home'
import Chat from './components/Chat'
import Call from './components/Call'
import Status from './components/Status'
import Setting from './components/Setting'
import Profile from './components/Profile'
import './App.css';
const App = () => {
  return (
    <Router>
      <div>
        <nav className='main_app_nav'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
            <li>
              <Link to="/Call">Call</Link>
            </li>
            <li>
              <Link to="/Status">Status</Link>
            </li>
            <li>
              <Link to="/Setting">Setting</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Call" element={<Call />} />
          <Route path="/Status" element={<Status />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;