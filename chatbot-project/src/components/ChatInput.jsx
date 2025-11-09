
import { useState } from "react";
import { Chatbot } from "supersimpledev";


// To export the component, simply add `export` before function
// Or export it at the bottom of the script
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



// export component
// NOTE that in case of exporting as below, you MUST import without curly brackets
export default ChatInput