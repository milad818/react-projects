import { useState, useEffect, useRef } from 'react'

import { Chatbot } from 'supersimpledev'

// images can be imported as below or passing the paths to images drectly as <img/> prop
import RobotProfileImage from './assets/robot.jpg'
import UserProfileImage from './assets/user.jpg'

// Vite feature enables to import css files as well as js files
import './App.css'


function ChatInput( {chatMessages, setChatMessages} ) {

          const [inputText, setInputText] = useState('');

          function saveInputText(event) {
            setInputText(event.target.value);
          }

          function sendMessage() {
            
            const newChatMessages = [
              ...chatMessages,
              {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
              }
            ]
            
            // Apparently, commenting the function below doesn't impact the performance
            setChatMessages(newChatMessages);

            const response = Chatbot.getResponse(inputText);

            // WATCH OUT! State is updated after all of the code is finished!
            // So this below overwrites the input message and displays the response at the end
            setChatMessages([
              ...newChatMessages,
              {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
              }
            ]);

            setInputText('');
          }

          return (
              // It is good to go with <div> if there will be flexbox feature
              // That is mainly because there is a container needed for it
              <div
              className="chat-input-container">                
                  <input
                    type="text"
                    placeholder="Type your message..."
                    size="50"
                    onChange = {saveInputText}
                    value={inputText}   
                    className="chat-input"               
                  />
                  <button
                  onClick={sendMessage}
                  className="send-button"
                  > Send </button>
              </div>
          );
        }

        // chat message component
        function ChatMessage(props) {
          // console.log("ChatMessage props:", props);
          
          // const message = props.message;
          // const sender = props.sender;

          // OR alternatively
          // Even without the line below, message and sender can be destructed and passed directly in the function parameters like: { message, sender }
          const { message, sender } = props; // shortcut for props.message and props.sender

          /*
          if (sender === "user") {
            return (
              <div>
                {message}
                <img src={`images/user.jpg`} width="50" />
              </div>
            );
          }
          */

          return (
              <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
                {sender === "robot" && <img src={RobotProfileImage} className='chat-message-image' />}
                <div className='chat-message-text'>
                  {message}
                </div>
                {sender === "user" && <img src={UserProfileImage} className='chat-message-image' />}
              </div>
          );
        
          
          // OR ALTERNATIVELY you can use conditional clauses to return
          // which seems more efficient and cleaner BUT images are positioned similary for both
          // return(
          //   // For reproducibility, no message should be passed directly below!
          //   <div>
          //     {message}
          //     <img src={`images/${sender}.jpg`} width="50" /> 
          //   </div>
          // )

        }

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

        function ChatMessages({ chatMessages }) {
      
          const chatMessageRef = useRef(null);

          useEffect(() => {     
            // Below refer to the component subject to effects
            // But a component cannot be directly referred inside this hook
            const containerElem = chatMessageRef.current // Log it to see what is inside (the div comp. referenced below)
            // check if containerElem exists
            if (containerElem) {
              containerElem.scrollTop = containerElem.scrollHeight
            }
          }, [chatMessages]); // empty [] -> effect applied only when component created/updated
                              // dependency array [chatMessages] to control when useEffect runs

          return(
            // Be careful that on click, the content of the array is updated bu not the DOM
            // so the updated content might be displayed on explorer
            // You’re changing the variable in memory, but the page doesn’t know it needs to update.
            // Unless your code listens for changes and updates the DOM (for example, by re-running a render function or setting state in React)
            <div className='chat-messages-container'
                 ref={chatMessageRef}>
              {
                  chatMessages.map((chatMessage) => {
                    return(
                      <ChatMessage 
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        key={chatMessage.id}
                      />
                    )
                  })
                }
            </div>
          )

        }


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
