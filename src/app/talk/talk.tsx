"use client";
import React, { useState } from 'react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const Talk: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prevMessages => [...prevMessages, userMessage]);

    try {
      const response = await fetch('/api/talk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const botMessage: Message = { sender: 'bot', text: data.reply };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show an error message to the user)
    }

    setInput('');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
  <div style={{ 
    height: '400px', 
    overflowY: 'scroll', 
    border: '1px solid #ccc', 
    borderRadius: '10px',
    padding: '15px',
    backgroundColor: '#f0f0f0', // Light grey background
    marginBottom: '20px'
  }}>
    {messages.map((msg, index) => (
      <div 
        key={index} 
        style={{ 
          textAlign: msg.sender === 'user' ? 'right' : 'left',
          marginBottom: '10px'
        }}
      >
        <span style={{
          display: 'inline-block',
          maxWidth: '70%',
          padding: '10px 15px',
          borderRadius: '20px',
          backgroundColor: msg.sender === 'user' ? '#007bff' : '#343a40', // Blue for user, dark grey for bot
          color: 'white'
        }}>
          {msg.text}
        </span>
      </div>
    ))}
  </div>
  <form onSubmit={sendMessage} style={{ display: 'flex' }}>
      <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Type a message..."
      style={{ 
        flexGrow: 1,
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '20px 0 0 20px',
        outline: 'none',
        color: '#000',  // Set text color to black
        backgroundColor: '#fff'  // Set background to white
      }}
    />
    <button 
      type="submit" 
      style={{ 
        width: '80px',
        border: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        padding: '10px',
        borderRadius: '0 20px 20px 0',
        cursor: 'pointer'
      }}
    >
      Send
    </button>
  </form>
</div>
  );
};

export default Talk;