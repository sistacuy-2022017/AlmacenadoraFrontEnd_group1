import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { deleteTaskes } from "../services/api";
import "../components/TodoCard.css";

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState(taskObj);
  const [flashcards, setFlashcards] = useState([taskObj]);

  const colors = [
    { primaryColor: "#5D93E1", secondaryColor: "#ECF3FC" },
    { primaryColor: "#F9D288", secondaryColor: "#FEFAF1" },
    { primaryColor: "#5DC250", secondaryColor: "#F2FAF1" },
    { primaryColor: "#F48687", secondaryColor: "#FDF1F1" },
    { primaryColor: "#B964F7", secondaryColor: "#F3F0FD" },
  ];

  const handleDelete = async () => {
    try {
      await deleteTaskes(taskObj.id._id);
      updateListArray();
    } catch (error) {
      console.error("Error al eliminar la tarea: ", error);
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para actualizar la tarea
    setEditMode(false);
  };

  return (
    <div className="card-wrapper-mr-5" style={{ marginBottom: "20px" }}>
      <div
        className="card-top"
        style={{ backgroundColor: colors[index % 5].primaryColor }}
      ></div>
      <div className="task-holder">
        {editMode ? (
          <div className="edit-form-container">
            <form onSubmit={handleSubmit} className="edit-form">
              <input
                type="text"
                name="taskName"
                value={editedTask.taskName}
                onChange={handleInputChange}
                placeholder="Task Name"
              />
              <textarea
                name="descriptionTask"
                value={editedTask.descriptionTask}
                onChange={handleInputChange}
                placeholder="Description"
              ></textarea>
              <input
                type="date"
                name="dateTask"
                value={editedTask.dateTask}
                onChange={handleInputChange}
                placeholder="Start Date"
              />
              <input
                type="date"
                name="dateTaskEnd"
                value={editedTask.dateTaskEnd}
                onChange={handleInputChange}
                placeholder="End Date"
              />
              <input
                type="text"
                name="priorityTask"
                value={editedTask.priorityTask}
                onChange={handleInputChange}
                placeholder="Priority"
              />
              <input
                type="text"
                name="userTask"
                value={editedTask.userTask}
                onChange={handleInputChange}
                placeholder="User"
              />
              <input
                type="text"
                name="progressTask"
                value={editedTask.progressTask}
                onChange={handleInputChange}
                placeholder="Progress"
              />
              <button type="submit">Save</button>
            </form>
          </div>
        ) : (
          <>
            <span className="card-header">{taskObj._id}</span>
            <span className="card-header">{taskObj.taskName}</span>
            <p className="mt-3">Description: {taskObj.descriptionTask}</p>
            <p>Start Date: {taskObj.dateTask}</p>
            <p>End Date: {taskObj.dateTaskEnd}</p>
            <p>Priority: {taskObj.priorityTask}</p>
            <p>User: {taskObj.userTask}</p>
            <p>Progress: {taskObj.progressTask}</p>
          </>
        )}
        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <FontAwesomeIcon
            icon={faEdit}
            style={{
              color: colors[index % 5].primaryColor,
              cursor: "pointer",
            }}
            onClick={handleEdit}
          />
          <FontAwesomeIcon
            icon={faTrashAlt}
            style={{
              color: colors[index % 5].primaryColor,
              cursor: "pointer",
            }}
            onClick={
              taskObj._id ? handleDelete : () => deleteTaskes(taskObj.id)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
