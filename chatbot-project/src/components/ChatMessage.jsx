
// images can be imported as below or passing the paths to images drectly as <img/> prop
import RobotProfileImage from '../assets/robot.jpg'
import UserProfileImage from '../assets/user.jpg'


// chat message component
export function ChatMessage(props) {
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

}

