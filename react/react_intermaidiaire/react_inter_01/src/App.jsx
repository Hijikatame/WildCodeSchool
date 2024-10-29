import { useState } from "react";
import EmployeeCard from "./components/EmployeeCard"

function App() {
  const sampleEmployee = {
    name: {
      first: "Charlie",
      last: "Thompson",
    },
    email: "charlie.thompson@example.com",
    picture: {
      medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
    },
  };
  const [employee, setEmployee] = useState(sampleEmployee);

  const getEmployee = () => {
    // Send the request
    fetch("https://randomuser.me/api?nat=en")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");         
        } 
        return response.json() 
      })
      .then((data) => {
        // destructure la data employee de reponse
        const { name, email, picture } = data.results[0];
        // update le state avec les nouvelle data employee
        setEmployee({
          name,
          email,
          picture,
        });
      })
      .catch((error) => {
        console.log("Il y a un probleme avec le Fletch : ", error);
      });
  };

  return (
    <>
    <div className="App">
      <EmployeeCard employee={employee} />
    </div>
    <button type="button" onClick={getEmployee}>Get employee</button>
    </>
  );
}

export default App
