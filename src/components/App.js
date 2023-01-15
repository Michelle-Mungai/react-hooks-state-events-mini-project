import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState('All')

  const deleteTaskHandler = (singleTask => {
    const updateTasks = tasks.filter((task) => task.text !== singleTask);
    setTasks(updateTasks)
  })
  const addTaskHandler = (NewTask) => {
    setTasks([...tasks, NewTask])
  }
  const visibleTasks = tasks.filter(task => category === 'All' || task.category === category)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} selectedCategory = {category} 
      onCategorySelect = {setCategory} />
     <div className="tasks">
        <NewTaskForm categories={CATEGORIES.filter(cat => cat !== 'All')} onTaskFormSubmit={addTaskHandler} />
        <TaskList tasks={visibleTasks} onDeleteTask={deleteTaskHandler} />
      </div>
    </div>
  );
}

export default App;
