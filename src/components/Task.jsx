import {Check, Trash, X} from 'lucide-react'
import Button from './Button'

const Task = ({ id, title, time, date, category, timeTerm, dateTerm, isComplete, deleteTask, completeTask }) => {

  return (
    <div className="border border-zinc-400 flex items-center justify-between p-4 w-2/4 m-auto mt-3 rounded-md shadow-md dark:bg-zinc-800 max-md:w-[90%] max-md:p-3">
      <div className={isComplete ? "line-through" : ""}>
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-blue-800">({category})</p>
          <div className="flex gap-4 max-md:flex-wrap max-md:gap-0">      
            <div className="flex gap-2 text-sm font-medium text-emerald-800">
              <p>Criação:</p>
              <p>{time}h</p>
              <p>{date}</p>
            </div>
            <div className="flex gap-2 text-sm font-medium text-red-600">
                <p>Prazo:</p>
                <p>{timeTerm}h</p>
                <p>{dateTerm}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button 
          id={id} 
          icon={<Check size={18} />} 
          text="Complete" 
          alternative="Deselect"
          alternateIcon={<X size={18} />}
          type="button" 
          action="complete" 
          completeTask={completeTask} 
          isComplete={isComplete}
          />
          <Button 
          id={id} 
          icon={<Trash size={18} />} 
          text="Delete" 
          type="button" 
          action="delete" 
          deleteTask={deleteTask} 
          isComplete={isComplete} 
          />
        </div>
    </div>
  )
}

export default Task