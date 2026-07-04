import { useState } from "react";
function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  function addTask() {
    setTasks([...tasks, task]);
    setTask("");
  };
  function deletetask(indextodelete) {
    const updatedTask = tasks.filter((task, index) => {
      return index !== indextodelete
    });
    setTasks(updatedTask);
  }
  return (
    <>
      <h1>Task manager</h1>
      <input
        type="text"
        value={task}
        placeholder="Enter Task"
        onChange={(event) => {
          setTask(event.target.value)
        }}
      />
      <button onClick={addTask}>ADD</button>

      {tasks.map((task, index) => (
        <div key={index}>
          <span>{task}</span>
          <button onClick={() => deletetask(index)}>DEL</button>
        </div>
      ))}
    </>

  );
}
export default App;