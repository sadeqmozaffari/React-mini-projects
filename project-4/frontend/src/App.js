import ToDoList from "./TodoList";
import TailwindToaster from "./TailwindToaster";
function App() {
  return (
    <div className="bg-dark py-4 text-white">
      <ToDoList />
      <TailwindToaster />
    </div>
  );
}

export default App;
