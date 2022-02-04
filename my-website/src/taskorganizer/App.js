import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [dropdown, setDropdown] = useState(false)

  const [tasks, setTasks] = useState([])

  //addTaskDropdown sets the dropdown state to a boolean
  const addTaskDropdown = () => {
    setDropdown(!dropdown)
  }

  //addTask adds the inputed task to the tasks state
  const addTask = (task) => {    
    setTasks([...tasks, task])
  } 

  //deleteTask removes the task from the tasks state
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  } 

  //line 91 is conditional rendering, (true && expression) will evaluate the expression
  //(false && expression) expression will be ignored
  return (
    <div className="main-container">
      <Header onClick={addTaskDropdown} dropdown={dropdown}/>
      {dropdown && <AddTask onAdd={addTask}/>}
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  )
}

export default App;