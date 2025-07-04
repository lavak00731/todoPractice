import { ShowHideComp } from './ShowHideComp'

export const InactiveTasks = ({inactiveTasks}) => {
    console.log(inactiveTasks)
  return (
   <>
    <h2>Tareas Inactivas</h2>
    <ul>
        {
            inactiveTasks.map((task) => {
               return <li key={task.id}>
                    <ShowHideComp task={task}/>
                </li>
            })
        }
    </ul>
   </>
  )
}
