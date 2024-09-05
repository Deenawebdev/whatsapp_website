import React from "react";
import './Home.css';


function Home(){
    return (
        <div className="app-container">
          {/* Sidebar Section */}
          <aside className="sidebar">
            <header className="sidebar-header">
              <div className="logo">
                <p>kitty</p>
              </div>
              <div className="icons">
                 _hey kitty !
                <p>3 unread msg</p>
              </div>
            </header>
            
            <div className="search-container">
              <input type="text" placeholder="Search or start a new chat" className="search-bar" />
            </div>
            
            <div className="chat-list">
              <ChatItem
                name="30 Days FSD B20 Challenge !!"
                message="What will you Learn for 30 Days Challenge?"
                time="14:22"
                unread={1}
              />
              <ChatItem
                name="My Python FSD batch 1 July 3"
                message="Resume send pennunga guys."
                time="Yesterday"
                unread={0}
              />
              <ChatItem
                name="Cuvette Jobs G214"
                message="joined using this group's invite link"
                time="11:40"
                unread={2}
              />
              {/* Add more ChatItems as needed */}
            </div>
          </aside>
    
          {/* Main Chat Section */}
          <main className="chat-section">
            <div className="chat-info">
              <img src="whatsapp-logo.png" alt="WhatsApp" className="whatsapp-logo" />
              <h2>WhatsApp for Windows</h2>
              <p>Send and receive messages without keeping your phone online.</p>
              <p>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</p>
            </div>
          </main>
        </div>
      );
    }
    
    function ChatItem({ name, message, time, unread }) {
      return (
        <div className="chat-item">
          <div className="chat-info">
            <h3>{name}</h3>
            <p>{message}</p>
          </div>
          <div className="chat-meta">
            <span className="chat-time">{time}</span>
            {unread > 0 && <span className="unread-count">{unread}</span>}
          </div>
        </div>
      );
}

export default Home;

