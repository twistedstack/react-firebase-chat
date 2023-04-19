
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);
  return (
    <div className={`chat-bubble ${message.uid === user.uid ? "chat-bubble-right" : ""}`}>
      <img
        className="chat-bubble-avatar"
        src={message.avatar}
        alt={message.name}
      />
      <div className="chat-bubble-message">
        <p className="user-name">{message.name}</p>
        <p className="user-message">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;

