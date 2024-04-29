import './App.css';
import { TodoAdd } from './components/TodoAdd';
import { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState([]);

    const handleNewTodo = (newTodo) => {
        setTasks([...tasks, newTodo]);
    };

    return (
        <>

            <div className='card-to-do'>
                <h1>Lista de tareas</h1>
            </div>
            <div className='add-todo'>
            <div >
                <h3></h3>
                <TodoAdd handleNewTodo={handleNewTodo} />
            </div>
            </div>

        </>
    );

}

export default App;
