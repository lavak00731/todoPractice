
import { useEffect, useState } from 'react'
import './App.css'
import getTasksService from "./services/getTasksService";
import { ActiveTasks } from './components/activeTasks';
import { InactiveTasks } from './components/inactiveTasks';

function App() {
const [tasks, setSetTasks] = useState([]);
const getTasks = async() => {
  const taskRequest = await getTasksService()
  setSetTasks(taskRequest)
}

const activeTasks =tasks && tasks.filter(task => task.status === 'activa');
const inactiveTasks =tasks && tasks.filter(task => task.status === 'inactiva');
useEffect(() => {
  getTasks();
  return () => {
  }
}, [])
 

  return (
    <>
      {tasks && tasks.length > 0 ? (
        <>
        <ActiveTasks activeTasks={activeTasks} />
        <InactiveTasks inactiveTasks={inactiveTasks} />
        </>
      ) : (
        <p>No hay tareas</p>
      )}
    </>
  )
}

export default App
