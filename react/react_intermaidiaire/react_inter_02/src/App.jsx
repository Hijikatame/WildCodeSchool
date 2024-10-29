import { useState } from "react";
import "./App.css";

import UserContext from "./contexts/UserContext";
import UserProfile from "./components/UserProfile";



function App() {
  const [isOnligne, setIsOnligne] = useState(false);

  return (
  <UserContext.Provider value={{ isOnligne: isOnligne, setIsOnligne: setIsOnligne }}>
    <UserProfile />
  </UserContext.Provider>
  
  )
}

export default App;