import React, { useState } from 'react';
import { IoSunny } from "react-icons/io5";

const responses = {
  greeting: "Hello! I'm a text-based chatbot. How can I assist you?",
  weather: {
    sunny: "The weather is sunny today.",
    rainy: "It is rainy today.",
    noInfo: "I'm sorry, I don't have information about the weather."
  },
  farewell: "Goodbye! Have a great day.",
  college: "Velammal."
};

function App() {
  const [userInput, setUserInput] = useState('');
  const [chatbotResponse, setChatbotResponse] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleUserInput = () => {
    const userInputLower = userInput.toLowerCase();
    const currentTime = new Date().toLocaleTimeString();
    let response;

    if (userInputLower === 'hi' || userInputLower === 'hello' || userInputLower === 'welcome') {
      response = "Hello! I'm a chatbox.";
    } else if (userInputLower.includes('weather')) {
      response = responses.weather.sunny;
    } else if (userInputLower === 'bye') {
      response = responses.farewell;
    } else if (userInputLower === 'college' || userInputLower === 'school') {
      response = responses.college;
    } else if (userInputLower === 'time') {
      response = `The current time is ${currentTime}.`;
    } else if (userInputLower.includes('creator') || userInputLower.includes('who created') || userInputLower.includes('who is this created') || userInputLower.includes('who invent')) {
      response = "The creator of this chatbot is Prakash.";
    } else if (userInputLower.includes('invent') || userInputLower.includes('invented')) {
      response = "The concept of chatbots dates back to the 1960s, but the specific inventor is debated among different technologies and implementations.";
    } else {
      response = "I'm sorry, I couldn't understand that.";
    }

    setChatbotResponse(response);
    setUserInput('');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    // Update root element class to apply dark mode styles
    const rootElement = document.documentElement;
    if (darkMode) {
      rootElement.classList.remove('dark');
    } else {
      rootElement.classList.add('dark');
    }
  };

  return (
    <div className={`${darkMode ? 'bg-black-100' : ''}`}>
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      
      <IoSunny size={48} className="absolute top-10 right-10 cursor-pointer" onClick={toggleDarkMode} />
      <p className="m-5 block text-sm font-semibold leading-6 text-gray-900">{responses.greeting}</p>
      <input
        type="text"
        className={`ml-4 mr-4 block rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Type your message here..."
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleUserInput();
          }
        }}
      /><br></br>
      <button className={`m-6 block rounded-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-indigo-600 text-white'} px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm hover:${darkMode ? 'bg-gray-700' : 'bg-indigo-500'} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${darkMode ? 'white' : 'indigo'}-600`} 
        onClick={handleUserInput}>Send</button>
      {chatbotResponse && (
        <p className={`mt-4 p-2 ${darkMode ? 'text-white bg-gray-800' : 'text-blue-700 bg-gray-200'} rounded-lg`}>{chatbotResponse}</p>
      )}
    </div>
    </div>
    
  );
}

export default App;
