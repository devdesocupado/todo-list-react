import ToDoForm from "./components/ToDoForm"
import Task from "./components/Task"
import Header from "./components/Header"
import React, { useEffect, useState } from 'react'

function App() {
  const [theme, setTheme] = useState(() =>{
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
    return 'light'
  })

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    theme === 'dark' ? document.querySelector('html').classList.add('dark') : document.querySelector('html').classList.remove('dark')
  }, [theme])

  const loadTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem('tasks')
    return storedTasks ? JSON.parse(storedTasks) : []
  }

  const [tasks, setTasks] = useState(loadTasksFromLocalStorage())

  const addTask = (title, category, timeTerm, dateTerm) => {
    const newTasks = [...tasks, {
      id: Math.floor(Math.random() * 10000),
      title,
      category,
      timeTerm,
      dateTerm: new Date(dateTerm).toLocaleDateString('pt-BR', { timeZone: 'UTC' }),
      isComplete: false,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString('pt-br', {hour: '2-digit', minute:'2-digit'}) 
    }]
    setTasks(newTasks)
  }

  const completeTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isComplete: !task.isComplete } : task))
  }

  const deleteTask = (id) => {
    const newTasks = [...tasks]
    const filteredTasks = newTasks.filter((task) => task.id !== id)
    setTasks(filteredTasks)
  }

  const renderTasks = (isComplete) => (
    tasks.filter(task => task.isComplete === isComplete).map(task => (
      <Task 
        key={task.id}
        {...task}
        isComplete={task.isComplete} 
        completeTask={completeTask}
        deleteTask={deleteTask} 
      />
    ))
  )

  const countTasks = (isComplete) => tasks.filter(task => task.isComplete === isComplete).length

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className=" bg-gray-50 w-screen h-screen overflow-x-hidden dark:bg-zinc-900 dark:text-zinc-50">
      <Header handleChangeTheme={handleChangeTheme} theme={theme} />
      <ToDoForm addTask={addTask} />
      <div>
        <h1 className="text-center text-lg font-semibold">Tarefas Pendentes ({countTasks(false)})</h1>
        {renderTasks(false)}
        <h1 className="text-center text-lg font-semibold mt-8">Tarefas Concluídas ({countTasks(true)})</h1>
        {renderTasks(true)}
      </div>
    </div>
  )
}

export default App
