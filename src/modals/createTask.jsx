import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { createTask } from "../services/api.jsx";
import toast from "react-hot-toast";

const CreateTask = ({ modal, toggle, fetchTasks }) => {
  const [taskName, setTaskName] = useState("");
  const [descriptionTask, setDescriptionTask] = useState("");
  const [dateTask, setDateTask] = useState("");
  const [dateTaskEnd, setDateTaskEnd] = useState("");
  const [priorityTask, setPriorityTask] = useState("low");
  const [userTask, setUserTask] = useState("");
  const [progressTask, setProgressTask] = useState("pending");

  const clearFormData = () => {
    setTaskName("");
    setDescriptionTask("");
    setDateTask("");
    setDateTaskEnd("");
    setPriorityTask("low");
    setUserTask("");
    setProgressTask("pending");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = {
      taskName,
      descriptionTask,
      dateTask: new Date(dateTask),
      dateTaskEnd: dateTaskEnd ? new Date(dateTaskEnd) : null,
      priorityTask,
      statusTask: true,
      userTask,
      progressTask,
    };

    try {
      const response = await createTask(newTask);
      console.log("Tarea guardada correctamente:", response);
      toast.success("Tarea guardada correctamente");
      clearFormData();
      toggle();
      fetchTasks();
    } catch (error) {
      console.error("Error al guardar la tarea:", error);
      toast.error("Error al guardar la tarea");
    }
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Crear Tarea</ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="task">Tarea</label>
            <input
              type="text"
              className="form-control"
              id="task"
              placeholder="Ingrese la tarea"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Descripción</label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              value={descriptionTask}
              onChange={(e) => setDescriptionTask(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="dateTask">Fecha de Inicio</label>
            <input
              type="date"
              className="form-control"
              id="dateTask"
              value={dateTask}
              onChange={(e) => setDateTask(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateTaskEnd">Fecha de Finalización</label>
            <input
              type="date"
              className="form-control"
              id="dateTaskEnd"
              value={dateTaskEnd}
              onChange={(e) => setDateTaskEnd(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="priority">Prioridad</label>
            <select
              className="form-control"
              id="priority"
              value={priorityTask}
              onChange={(e) => setPriorityTask(e.target.value)}
            >
              <option value="low">Baja</option>
              <option value="medium">Media</option>
              <option value="high">Alta</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="userTask">Usuario</label>
            <input
              type="text"
              className="form-control"
              id="userTask"
              placeholder="Ingrese el usuario"
              value={userTask}
              onChange={(e) => setUserTask(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="progress">Progreso</label>
            <select
              className="form-control"
              id="progress"
              value={progressTask}
              onChange={(e) => setProgressTask(e.target.value)}
            >
              <option value="pending">Pendiente</option>
              <option value="in progress">En progreso</option>
              <option value="completed">Completada</option>
            </select>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSubmit}>
          Crear Tarea
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
