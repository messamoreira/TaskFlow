import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="text-red-500">Task Flow</h1>
      <AddTask />
      <Tasks />
    </div>
  );
}

export default App;
