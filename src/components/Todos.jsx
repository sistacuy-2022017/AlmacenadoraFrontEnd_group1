// Todo.jsx
import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import CreateTask from "../modals/createTask.jsx";
import Card from "../components/TodoCard.jsx"; // Asegúrate de importar el componente Card
import { getTask } from "../services/api.jsx";

const Todo = () => {
  const [modal, setModal] = useState(false);
  const [tasklist, setTaskList] = useState([]);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const tasksFromDB = await getTask();
      console.log("Tareas obtenidas correctamente:", tasksFromDB);
      setTaskList(tasksFromDB);
    } catch (error) {
      console.error("Error al obtener las tareas:", error);
    }
  };

  return (
    <>
      <div className="header text-center">
        <h3>Todo List</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>Create Task</button>
      </div>
      <div className="task-container">
        {tasklist.map((task, index) => (
          <Card key={index} taskObj={task} index={index} deleteTask={() => {}} />
        ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} fetchTasks={fetchTasks} />
    </>
  );
};

export default Todo;
