import React from "react";
//import "./TodoCard.css"; // Asegúrate de tener el archivo CSS correspondiente

const TodoCard = ({ todo }) => {
  return (
    <div className="todo-card">
      <h3>{todo.taskName}</h3>
      <p>{todo.descriptionTask}</p>
      <p><strong>Fecha de inicio:</strong> {todo.dateTask}</p>
      <p><strong>Fecha de fin:</strong> {todo.dateTaskEnd}</p>
      <p><strong>Usuario responsable:</strong> {todo.userTask}</p>
      <p><strong>Progreso:</strong> {todo.progressTask}</p>
      <p><strong>Prioridad:</strong> {todo.priorityTask}</p>
      <p><strong>Estado:</strong> {todo.statusTask}</p>
    </div>
  );
};

export default TodoCard;
