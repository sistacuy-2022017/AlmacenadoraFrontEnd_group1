import { useForm } from "../hooks/useForm";
import { createTask } from "../services";

export const TodoAdd = ({ handleNewTodo }) => {
  const {
    taskName,
    descriptionTask,
    dateTask,
    dateTaskEnd,
    userTask,
    progressTask,
    priorityTask,
    onInputChange,
    onResetForm,
  } = useForm({
    taskName: "",
    descriptionTask: "",
    dateTask: "",
    dateTaskEnd: "",
    userTask: "",
    progressTask: "",
    priorityTask: "",
  });

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createTask({
        taskName,
        descriptionTask,
        dateTask,
        dateTaskEnd,
        userTask,
        progressTask,
        priorityTask,
      });

      handleNewTodo(response.task);
      onResetForm();
    } catch (error) {
      console.error("ERROR al querer Crear la Tarea", error);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input //Name of the task
        type="text"
        className="input-add"
        name="taskName"
        value={taskName}
        onChange={onInputChange}
        placeholder="Nombre de la tarea"
        required
      />

      <input //Task description
        type="text"
        className="input-add"
        name="descriptionTask"
        value={descriptionTask}
        onChange={onInputChange}
        placeholder="Descripción de la tarea"
        required
      />
      <input //Start date
        type="date"
        className="input-add"
        name="dateTask"
        value={dateTask}
        onChange={onInputChange}
        required
      />
      <input //Start end
        type="date"
        className="input-add"
        name="dateTaskEnd"
        value={dateTaskEnd}
        onChange={onInputChange}
        required
      />
      <input //Task user
        type="text"
        className="input-add"
        name="userTask"
        value={userTask}
        onChange={onInputChange}
        placeholder="Usuario de la Tarea"
        required
      />
      <select //Task status
        className="input-add"
        name="progressTask"
        value={progressTask}
        onChange={onInputChange}
        required
      >
        <option value="">Estado de la Tarea</option>
        <option value="pending">Pendiente</option>
        <option value="in progress">En progreso</option>
        <option value="completed">Completada</option>
      </select>
      <select //Task priority
        className="input-add"
        name="priorityTask"
        value={priorityTask}
        onChange={onInputChange}
        required
      >
        <option value="">Prioridad de la Tarea</option>
        <option value="low">Baja</option>
        <option value="medium">Media</option>
        <option value="high">Alta</option>
      </select>

      <button className="btn-add" type="submit">
        Agregar
      </button>
    </form>
  );
};
