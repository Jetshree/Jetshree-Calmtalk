import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const GeminiChatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm a Gemini-powered AI assistant. How can I help you today?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Initialize Gemini AI
  // Replace 'YOUR_API_KEY' with your actual Gemini API key
  const genAI = new GoogleGenerativeAI('YAIzaSyDXRN1WbnRoy4rL1sJ8IfcL8HvbChv1lEg');

  const generateResponse = async (userMessage) => {
    try {

      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      
      // Get conversation history in the format Gemini expects
      const history = messages.map(msg => ({
        role: "user",
        parts: msg.text,
      }));

      // Start a chat session
      const chat = model.startChat({
        history,
        generationConfig: {
          maxOutputTokens: 1000,
        },
      });

      // Send message and get response
      const result = await chat.sendMessage(userMessage);
      const response = await result.response;
      console.log("\n\nresponse")
      console.log(response)
      return response.text();
    } catch (err) {
      console.error('Error generating response:', err);
      throw err;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);

    // Add user message
    const userMessage = { text: inputMessage, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    try {
      // Get bot response from Gemini
      const botResponse = await generateResponse(inputMessage);
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    } catch (err) {
      setError('Failed to get response from AI. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto p-4">
      {/* Chat header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-lg">
        <h1 className="text-xl font-bold">Gemini AI Chatbot</h1>
      </div>

      {/* Messages container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.isBot
                  ? 'bg-white shadow-sm'
                  : 'bg-blue-600 text-white'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white shadow-sm p-3 rounded-lg">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
        {error && (
          <div className="flex justify-center">
            <div className="bg-red-100 text-red-600 p-3 rounded-lg">
              {error}
            </div>
          </div>
        )}
      </div>

      {/* Input form */}
      <form 
        onSubmit={handleSubmit}
        className="bg-white p-4 border-t flex gap-2"
      >
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        />
        <button
          type="submit"
          className={`bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isLoading}
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default GeminiChatbot;