import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams()
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  if (tasks.length === 0) {
    return (
      <div className="flex items-center justify-center h-40 p-6 bg-surface rounded-md shadow">
        <p className="text-muted-foreground text-center">
          You have no tasks yet. <br />
          Add one to get started!
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-4 p-6 bg-surface rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-muted text-left w-full text-primary-foreground p-2 rounded-md transition-colors hover:bg-muted/80 ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-muted p-2 rounded-md text-primary-foreground transition-colors hover:bg-muted/80"
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-muted p-2 rounded-md text-primary-foreground transition-colors hover:bg-muted/80"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
