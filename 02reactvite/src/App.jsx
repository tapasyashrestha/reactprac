import { useState } from "react";
function App() {
  const [name, setname] = useState("");
  const [Age, setAge]=useState("")

  return (
    <>
      <h2>Hello {name}</h2>
      <p>Age: {Age}</p>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => {
          setname(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter your age"
        value={Age}
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />
    </>

  );
}
export default App