import { useId, useState } from 'react'

export const ShowHideComp = ({task}) => {
    const [isExpanded, setIsExpanded] = useState(false);    
    const id = useId();
    const controls = useId()
    const showHide = ()=> {
        setIsExpanded(!isExpanded);
    }
  return (
    <>
        <button type="button"
         aria-expanded={isExpanded}
         id={id}
         aria-controls={controls}
         onClick={
            ()=>{showHide()}
         }
         >
            {task.description}
        </button>
        <div className="wrapper" id={controls}>
            <p className="vencimiento">{task.fechaVencimiento}</p>
            <p className="status">{task.estaVencida ? "Vencida" : "No está vencida"}</p>
        </div>
    </>
  )
}
