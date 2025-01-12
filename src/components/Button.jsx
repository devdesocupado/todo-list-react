import React from 'react'

const Button = ({ id, action, icon, text, type, deleteTask, completeTask, isComplete, alternative, alternateIcon, handleChangeTheme, theme }) => {
  const windowMobile = window.innerWidth <= 768

  return (
    <button 
      type={type} 
      action={action} 
      onClick={action === "complete" ? () => completeTask(id) 
        : action === "delete" ? () => deleteTask(id) 
        : action === "toggleTheme" ? () => handleChangeTheme() 
        : null}
      className={`p-2 text-sm font-semibold rounded flex items-center justify-center gap-1 
      ${action === "submit" ? `bg-violet-700 text-zinc-50 hover:bg-violet-800 duration-200 max-md:col-span-1` 
      : isComplete && action === "delete" ? `bg-red-600 text-zinc-50 hover:bg-red-700 duration-200`
      : !isComplete && action === "delete" ? `hidden`
      : isComplete ? `bg-blue-700 text-zinc-50 hover:bg-blue-800 duration-200`
      : action === "toggleTheme" ? `bg-transparent hover:bg-zinc-700 duration-200 hover:text-zinc-50` 
      : `bg-emerald-600 text-zinc-50 hover:bg-emerald-700 duration-200`}`}>
        {windowMobile && action === "delete" ? icon 
        : windowMobile && isComplete && action === "complete" ? alternateIcon 
        : windowMobile && !isComplete && action === "complete" ? icon
        : isComplete && action === "complete" ? <>{alternateIcon}{alternative}</>
        : theme === "dark" && action === "toggleTheme" ? alternateIcon 
        : <>{icon}{text}</>}
    </button>
  )
}

export default Button