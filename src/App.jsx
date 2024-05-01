import React from "react";
import Todos from "./components/Todos";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Todos />
      <Toaster position="top-center" reverseOrder={false} />{" "}
    </div>
  );
}

export default App;
