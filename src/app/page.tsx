'use client';

import { useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  return (
    <>
      <h1>Lista de Tareas</h1>
      <div>
        Nueva Tarea :{' '}
        <input
          type="text"
          placeholder="Agrega una nueva tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={() => {
            setTasks([...tasks, newTask]);
            setNewTask('');
          }}
        >
          Agregar
        </button>
      </div>

      <div>
        <h2>Tareas</h2>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}{' '}
              <button
                className="bg-red-500"
                onClick={() => setTasks(tasks.filter((_, i) => i !== index))}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
