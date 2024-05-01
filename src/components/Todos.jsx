import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createTask } from "../services";
import toast from "react-hot-toast";
import "./Todo.css";

const Todos = () => {
  const [taskName, setTaskName] = useState("");
  const [descriptionTask, setDescriptionTask] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [userTask, setUserTask] = useState("");
  const [progressTask, setProgressTask] = useState("");
  const [priorityTask, setPriorityTask] = useState("");

  const handleAddTodo = async () => {
    try {
      if (
        taskName.trim() === "" ||
        descriptionTask.trim() === "" ||
        userTask.trim() === "" ||
        progressTask.trim() === "" ||
        priorityTask.trim() === ""
      ) {
        toast.error("Por favor, completa todos los campos.");
        return;
      }
      const newTodo = {
        taskName,
        descriptionTask,
        dateTask: startDate,
        dateTaskEnd: endDate,
        userTask,
        progressTask,
        priorityTask,
        statusTask: "pending",
      };
      await createTask(newTodo);
      setTaskName("");
      setDescriptionTask("");
      setUserTask("");
      setProgressTask("");
      setPriorityTask("");
      toast.success("Tarea agregada exitosamente.");
    } catch (error) {
      toast.error("Error al agregar la tarea.");
    }
  };

  return (
    <div className="addTodos">
      <label htmlFor="taskName">Nombre de la tarea:</label>
      <input
        type="text"
        id="taskName"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="todo-input"
      />

      <label htmlFor="descriptionTask">Descripción de la tarea:</label>
      <textarea
        id="descriptionTask"
        value={descriptionTask}
        onChange={(e) => setDescriptionTask(e.target.value)}
        className="todo-input"
      />

      <label htmlFor="startDate">Fecha de inicio:</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText="Seleccionar fecha"
        className="todo-input"
        id="startDate"
      />

      <label htmlFor="endDate">Fecha de fin:</label>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        placeholderText="Seleccionar fecha"
        className="todo-input"
        id="endDate"
      />

      <label htmlFor="userTask">Usuario responsable:</label>
      <input
        type="text"
        id="userTask"
        value={userTask}
        onChange={(e) => setUserTask(e.target.value)}
        className="todo-input"
      />

      <label htmlFor="progressTask">Progreso:</label>
      <select
        id="progressTask"
        value={progressTask}
        onChange={(e) => setProgressTask(e.target.value)}
        className="todo-input"
      >
        <option value="">Seleccionar progreso</option>
        <option value="pending">Pendiente</option>
        <option value="in progress">En progreso</option>
        <option value="completed">Completado</option>
      </select>

      <label htmlFor="priorityTask">Prioridad:</label>
      <select
        id="priorityTask"
        value={priorityTask}
        onChange={(e) => setPriorityTask(e.target.value)}
        className="todo-input"
      >
        <option value="">Seleccionar prioridad</option>
        <option value="low">Baja</option>
        <option value="medium">Media</option>
        <option value="high">Alta</option>
      </select>

      <button onClick={handleAddTodo} className="add-btn">
        Add
      </button>
    </div>
  );
};

export default Todos;