import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-surface rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Enter task title"
        className="bg-background text-primary-foreground border border-muted outline-primary px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Enter task description"
        className="bg-background text-primary-foreground border border-muted outline-primary px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <button
        onClick={() => {
          if (!title || !description) {
            return alert("Please fill in the title and description of the task.");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium transition-colors hover:bg-primary/80"
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
