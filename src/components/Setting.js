import React, { useState } from 'react';
import './Setting.css';

const Setting = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className='setting_page'>
      <h1>Settings</h1>
      <div className='setting_section'>
        <h2 onClick={() => toggleSection('account')}>Account</h2>
        {activeSection === 'account' && (
          <ul>
            <li>Privacy</li>
            <li>Security</li>
            <li>Two-step verification</li>
            <li>Change number</li>
            <li>Request account info</li>
            <li>Delete my account</li>
          </ul>
        )}
      </div>
      <div className='setting_section'>
        <h2 onClick={() => toggleSection('chats')}>Chats</h2>
        {activeSection === 'chats' && (
          <ul>
            <li>Theme</li>
            <li>Wallpaper</li>
            <li>Chat history</li>
            <li>Archive all chats</li>
          </ul>
        )}
      </div>
      <div className='setting_section'>
        <h2 onClick={() => toggleSection('notifications')}>Notifications</h2>
        {activeSection === 'notifications' && (
          <ul>
            <li>Message notifications</li>
            <li>Group notifications</li>
            <li>Call notifications</li>
            <li>Ringtone</li>
            <li>Vibrate</li>
          </ul>
        )}
      </div>
      <div className='setting_section'>
        <h2 onClick={() => toggleSection('storage')}>Storage and Data</h2>
        {activeSection === 'storage' && (
          <ul>
            <li>Network usage</li>
            <li>Auto-download</li>
            <li>Storage usage</li>
            <li>Manage storage</li>
          </ul>
        )}
      </div>
      <div className='setting_section'>
        <h2 onClick={() => toggleSection('help')}>Help</h2>
        {activeSection === 'help' && (
          <ul>
            <li>FAQ</li>
            <li>Contact us</li>
            <li>Terms and privacy policy</li>
            <li>App info</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Setting;