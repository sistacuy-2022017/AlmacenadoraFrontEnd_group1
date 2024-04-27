import './App.css';
import { TodoAdd } from './components/TodoAdd';


function App() {
	return (
		<>
			<div className='card-to-do'>
				<h1>Lista de tareas</h1>
				<div className='add-todo'>
					<h3>Agregar Tarea</h3>
					<TodoAdd handleNewTodo />
				</div>
			</div>
		</>
	);
}

export default App;
