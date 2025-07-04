import { ShowHideComp } from './ShowHideComp'

export const ActiveTasks = ({activeTasks}) => {
  return (
   <>
    <h2>Tareas Activas</h2>
    <ul>
        {
            activeTasks.map((task) => (
                <li key={task.id}>
                    <ShowHideComp task={task}/>
                </li>
            ))
        }
    </ul>
   </>
  )
}
