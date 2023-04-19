import './App.css';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import ChatBox from "./components/ChatBox";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <NavBar />
      {user ? <ChatBox /> : <Welcome />}
    </div>
  );
}

export default App;