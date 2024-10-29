import React from "react";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

function UserProfile() {
  const { isOnligne, setIsOnligne } = useContext(UserContext);

  function toggleOnlineStatus() {
    setIsOnligne(prevState => !prevState); // Bascule l'état
  }

  return (
    <>
      <p>User is {isOnligne ? "en ligne" : "hors ligne"}</p>

      <button onClick={toggleOnlineStatus}>Click to change user status</button>
    </>
  );
}

export default UserProfile;