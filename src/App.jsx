import Todo from "./components/Todos.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Todo/>
      <Toaster position="top-center" reverseOrder={false} />{" "}
    </div>
  );
}

export default App;
