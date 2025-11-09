
import { useState } from 'react'

import ChatInput from './components/ChatInput'    // exported as default already
import { ChatMessages } from './components/ChatMessages'

// Vite feature enables to import css files as well as js files
import './App.css'


/*
// A very basic example of creating and passing variables to be rendered by ReactDOM
// Elements to pass to the render below
const button = <button>Click Me!</button>;
const text = <p>This is a paragraph to be rendered with React.</p>;
// What if we want to display multiple elements?
const app = (
    // {ChatInput()} could be an alternative way to call the component NOT RECOMMENDED
    // Also variable like {button} and {text} could be used inside JSX
    // even all different tags could be used directly inside JSX
    <>
        <ChatInput></ChatInput>
        <ChatMessage message="Hello Chatbot!" sender="user" />
        <ChatMessage message="How can I help you?" sender="robot" />
        <ChatMessage message="Can you get me todays date?" sender="user" />
        <ChatMessage message="Today is September 21st." sender="robot" />  
    </>
);
*/


// ALT for app (creating App component)
// and use it instead of the variable 'app' above
function App() {

  // Move state into App() so other components can access
  // const array = React.useState( 
  //   [{
  //   message: 'Hello Chatbot',
  //   sender: 'user',
  //   id: 'id1'
  // }, {
  //   message: 'Hello! How can I help you?',
  //   sender: 'robot',
  //   id: 'id2'
  // }, {
  //   message: 'Can you get me today\'s date?',
  //   sender: 'user',
  //   id: 'id3'
  // }, {
  //   message: 'Today is September 27th.',
  //   sender: 'robot',
  //   id: 'id4'
  // }]
  // );
  // 2. The array above re-organized through directly via array destructuring
  // instead of firstly forming 'array' and then destructuring it
  const [chatMessages, setChatMessages] = useState( 

    [{
    message: 'Hello Chatbot',
    sender: 'user',
    id: 'id1'
  }, {
    message: 'Hello! How can I help you?',
    sender: 'robot',
    id: 'id2'
  }, {
    message: 'Can you get me today\'s date?',
    sender: 'user',
    id: 'id3'
  }, {
    message: 'Today is September 27th.',
    sender: 'robot',
    id: 'id4'
  }]
  );
  // const chatMessages = array[0]; // current data
  // const setChatMessages = array[1]; // function to update data/DOM (Updater Function)
  // 1. ALTERNATIVE to the two lines above: array destructuring where order matters
  // const [chatMessages, setChatMessages] = array

  // const chatMessageComponents = chatMessages.map((chatMessage) => {
  //   return(
  //     <ChatMessage 
  //       message={chatMessage.message}
  //       sender={chatMessage.sender}
  //     />
  //   )
  // });

  return(
    <div
    className="app-container">              
      <ChatMessages 
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages} 
      />
    </div>
  )
}

export default App
