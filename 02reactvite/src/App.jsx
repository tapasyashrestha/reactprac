import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    setTasks([...tasks,{ 
      text: task,
      completed: false,
    },]);
    setTask("");
  }

  function deleteTask(indexToDelete) {
    const updatedTasks = tasks.filter((task, index) => {
      return index !== indexToDelete;
    });

    setTasks(updatedTasks);
  }
  function toggleSwitch(indextotoggle){
    const newi=tasks.map((task,index)=>{
      if (index === indextotoggle){
        return {...task,completed: !task.completed,}}
      else{
        return {...task,completed: task.completed,}
      }
    })
    setTasks(newi);
  }

  return (
    <>
      <h1>Task Manager</h1>

      <input
        type="text"
        value={task}
        placeholder="Enter Task"
        onChange={(event) => {
          setTask(event.target.value);
        }}
      />

      <button onClick={addTask}>ADD</button>

      {tasks.map((task, index) => (
        <div key={index}>
          <span>{task.text}</span>
          <button onClick={() => deleteTask(index)}>DEL</button>
          <button onClick={()=> toggleSwitch(index)}>{task.completed ? "✅" : "⬜"}</button>
        </div>
      ))}
    </>
  );
}

export default App;