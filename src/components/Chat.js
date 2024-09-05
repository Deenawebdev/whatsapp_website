import React, { useState, useEffect } from 'react';
import DaenerysImage from '../images/Daenerys targaryen.jpg';
import PandaImage from '../images/Panda.jpg';
import  Rs200bkeImage from '../images/Rs200bke.jpg';
import RossiImage from '../images/Rossi.jpg';
import SansaImage from '../images/Sansastark.jpg';
import NeymarImage from '../images/Neymar.jpg';
import jackSparrowImage from '../images/jacksparrow-1.jpg'; 
import './Chat.css';

const initialChats = [
  { id: 1, name: 'Captain Jack',image:jackSparrowImage, messages: [
    { text: 'Hey, how are you?', time: '12:30 PM' },
    { text: 'Just catching up with work!', time: '12:31 PM' }
  ] },
  { id: 2, name: 'Daenerys', image: DaenerysImage,messages: [
    { text: 'Did you see that movie?', time: '11:45 AM' },
    { text: 'Yes, it was great!', time: '11:46 AM' }
  ] },
  { id: 3, name: 'Kiddo',image: PandaImage, messages: [
    { text: 'What’s up?', time: '10:15 AM' },
    { text: 'Not much, just relaxing.', time: '10:16 AM' }
  ] },
  { id: 4, name: 'Luna' ,image: Rs200bkeImage , messages: [
    { text: 'Let’s catch up later.', time: '9:00 AM' },
    { text: 'Sure, what time works for you?', time: '9:01 AM' }
  ] },
  { id: 5, name: 'Rosi' ,image: RossiImage, messages: [
    { text: 'Meeting at 3?', time: 'Yesterday' },
    { text: 'Yes, see you then!', time: 'Yesterday' }
  ] },
  { id: 6, name: 'Sansa',image: SansaImage, messages: [
    { text: 'Happy Birthday!', time: 'Yesterday' },
    { text: 'Thanks a lot!', time: 'Yesterday' }
  ] },
  { id: 7, name: 'Neymar',image: NeymarImage , messages: [
    { text: 'Let me know.', time: '2 days ago' },
    { text: 'Will do!', time: '2 days ago' }
  ] },
  // Add more contacts as needed
];

const Chat = () => {
  const [chats, setChats] = useState(initialChats);
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [newMessage, setNewMessage] = useState('');

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '' && selectedChat) {
      const currentTime = new Date().toLocaleTimeString();

      const updatedChats = chats.map((chat) =>
        chat.id === selectedChat.id
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                { text: newMessage, time: currentTime },
              ],
            }
          : chat
      );

      setChats(updatedChats);
      setSelectedChat({
        ...selectedChat,
        messages: [...selectedChat.messages, { text: newMessage, time: currentTime }],
      });
      setNewMessage('');

      // Trigger a system reply after a delay
      setTimeout(() => {
        const replyText = generateReply(newMessage); // Generate a reply based on the message
        const replyTime = new Date().toLocaleTimeString();

        const updatedChatsWithReply = updatedChats.map((chat) =>
          chat.id === selectedChat.id
            ? {
                ...chat,
                messages: [
                  ...chat.messages,
                  { text: newMessage, time: currentTime },
                  { text: replyText, time: replyTime, isReply: true },
                ],
              }
            : chat
        );

        setChats(updatedChatsWithReply);
        setSelectedChat({
          ...selectedChat,
          messages: [
            ...selectedChat.messages,
            { text: newMessage, time: currentTime },
            { text: replyText, time: replyTime, isReply: true },
          ],
        });
      }, 1000); // 1 second delay for the reply
    }
  };

  const generateReply = (message) => {
    // Basic logic for generating a reply
    const responses = [
      "Got it!",
      "That's awesome!",
      "Sounds good to me.",
      "Let's keep in touch.",
      "What do you think?",
      "Absolutely!",
      "Can't wait to hear more!",
      "Tell me your thoughts.",
      "That makes sense.",
      "Interesting perspective.",
      "How do you feel about that?",
      "I'm all ears!",
      "Let's dive deeper.",
      "Totally agree!",
      "Thanks for sharing that.",
      "That's a great point!",
      "What's next?",
      "Keep me posted.",
      "I'm on the same page.",
      "Looking forward to it!",
      "I understand.",
      "That is interesting.",
      "You have my attention.",
      "How is that going?",
      "Can you tell me more?",
      "That is good to know.",
      "You are right!",
      "I want to learn more.",
      "No way!",
      "I really appreciate that!",
      "Tell me what comes next.",
      "That is an interesting perspective.",
      "I did not know that!",
      "I agree with you on that.",
      "What else can you share?",
      "Absolutely!",
      "That is fascinating!",
      "Tell me more.",
      "I am eager to hear more!",
      "That sounds intriguing!"
      
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='chat_page'>
      <div className='chat_list_container'>
        <h1>Chats</h1>
        <input
          type='text'
          placeholder='Search chats...'
          value={searchTerm}
          onChange={handleSearchChange}
          className='chat_search'
        />
        <div className='chat_list'>
          {filteredChats.map((chat) => (
            <div
              className={`chat_item ${selectedChat?.id === chat.id ? 'active' : ''}`}
              key={chat.id}
              onClick={() => handleChatClick(chat)}
            >
              <div className='chat_avatar'>
              <img src={chat.image} alt={chat.name} />  
              </div>
              <div className='chat_info'>
                <h2>{chat.name}</h2>
                <p>{chat.messages[chat.messages.length - 1].text}</p>
              </div>
              <div className='chat_time'>
                <span>{chat.messages[chat.messages.length - 1].time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedChat && (
        <div className='chat_details'>  
          <div className='selected_chat_img'>
          <h2>Chat with {selectedChat.name}</h2>
          <img src={selectedChat.image} alt={selectedChat.name} className='chat_details_image' />
          </div>
         

          <div className='message_list'>
            {selectedChat.messages.map((message, index) => (
              <div
                className={`message_item ${message.isReply ? 'reply' : ''}`}
                key={index}
              >
                <p>{message.text}</p>
                <span>{message.time}</span>
              </div>
            ))}
          </div>
          <div className='message_input'>
            <input
              type='text'
              placeholder='Type a message...'
              value={newMessage}
              onChange={handleMessageChange}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
