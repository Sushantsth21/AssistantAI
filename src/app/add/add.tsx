"use client"
import { useState } from 'react';

const Add: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  const handleSendMessage = async () => {
    try {
        const response = await fetch('/api/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message }),
        });

        if (response.ok) {
          const data = await response.json();
          setChatHistory([...chatHistory, data.message]);
        } else {
          console.error('Error sending message');
        }
      } catch (error) {
        console.error('Error:', error);
      } 
  };

  return (
    <section className="bg-white text-gray-900 text-center py-20 px-6 lg:px-16 shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
          Welcome to Rec Center
        </h1>
        <p className="text-lg lg:text-xl mb-4">
          Get in touch, we are happy to hear back from you!
        </p>
        <p className="text-md lg:text-lg mb-8">What's on your mind?</p>
        <div className="mb-4">
          <textarea
            className="w-full h-32 p-4 border border-gray-300 rounded-lg"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-500 transition-colors"
          onClick={handleSendMessage}
        >
          Send
        </button>
        <div className="mt-8 text-left">
          <h2 className="text-2xl font-bold mb-4">Chat History</h2>
          
        </div>
      </div>
    </section>
  );
};

export default Add;
