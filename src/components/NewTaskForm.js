import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")

  const submitHandler = (event) => {
    event.preventDefault();
    onTaskFormSubmit({ text, category })
    setText("")
    setCategory("")
  }
  return (
    <form className="new-task-form" onSubmit={submitHandler}>
      <label>
        Details
        <input type="text" value={text} name="text" onChange={(event) => setText(event.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(event) => setCategory(event.target.value)}>
          {/* render <option> elements for each category here */}
          {categories.map(singleCategory => (
          <option key={singleCategory}>{singleCategory}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
