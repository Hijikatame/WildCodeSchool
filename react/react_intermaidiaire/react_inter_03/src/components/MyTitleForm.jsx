import { useState } from "react";

function MyTitleForm() {
  const [title, setTitle] = useState("Awesome Title");

  const handleSubmit = event => event.preventDefault();

  const handleChange = event => {
    if (!event.target.value.includes("*")) {
      setTitle(event.target.value);
    }
    console.log(event.target.value);
    
  }
  



  return (
    <header>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title :</label>
        <input 
          id="title" 
          type="text"
          value={title}
          onChange={handleChange}
          />
      </form>
    </header>
  );
}

export default MyTitleForm;