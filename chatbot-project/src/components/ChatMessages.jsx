
import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import './ChatMessages.css'

export function ChatMessages({ chatMessages }) {
      
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