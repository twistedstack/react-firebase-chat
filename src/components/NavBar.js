import { auth } from "../firebase"; 
import { useAuthState } from "react-firebase-hooks/auth"; 
import { GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";

const NavBar = () => {

  const [user] = useAuthState(auth); 

  //console.log(user)
  
  const signUserIn = () => {
    // create a new google instance 
    const provider = new GoogleAuthProvider();
    // use the signInWithRedirect to get auth (user) and redirect them to provder to login and redirect back to app
    signInWithRedirect(auth, provider); 
  }

  const signUserOut = () => {
    signOut(auth); // auth (user) goes back to unauthenticated
  }

  return (
    <nav className="nav-bar">
      <h1>React Chat</h1>

      {
        user ? (
          <button className="sign-in" type="button" onClick={signUserOut}>
            Sign Out {user.displayName}
          </button>

        ) : (
            <button className="sign-in" type="button" onClick={signUserIn}>
              Sign In with Google
            </button>

        )
      }

    </nav>
  )
}

export default NavBar;
