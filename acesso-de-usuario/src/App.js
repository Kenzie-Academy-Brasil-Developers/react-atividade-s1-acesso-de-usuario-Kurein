import "./App.css";
import { useState } from "react";
import HandleUser from "./components/RestrictedPage";

function App() {
  const [isLoggedIn, setIsLoggetIn] = useState(false);
  const user = "Kaueh";

  function Login() {
    setIsLoggetIn(true);
  }

  function Logout() {
    setIsLoggetIn(false);
  }

  return (
    <div className="App">
      <HandleUser
        isLoggedIn={isLoggedIn}
        user={user}
        Login={Login}
        Logout={Logout}
      />
    </div>
  );
}

export default App;
