import React from 'react'
import { useState } from "react"
import { Plus } from 'lucide-react'
import Button from './Button'

const ToDoForm = ({ addTask }) => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [timeTerm, setTimeTerm] = useState('')
    const [dateTerm, setDateTerm] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!title || !category || !timeTerm || !dateTerm) return;
        addTask(title, category, timeTerm, dateTerm)
        setTitle('')
        setCategory('')
        setTimeTerm('')
        setDateTerm('')
    }

    return (
        <div className="border border-zinc-400 p-5 w-2/4 m-auto mt-8 mb-8 rounded-md shadow-md dark:bg-zinc-800 max-md:w-[95%] max-md:mt-4 max-md:p-3">
            <form onSubmit={handleSubmit} className="flex items-center justify-between flex-wrap flex-row-reverse max-md:grid grid-rows-2 grid-cols-3 gap-2">
            <input 
                value={title} 
                onChange={(event) => setTitle(event.target.value)} 
                className="bg-transparent w-full border border-zinc-400 rounded-md p-2 text-sm outline-violet-900 max-md:col-span-2" 
                type="text" 
                placeholder="Digite o nome da tarefa..." 
            />
            <Button 
                icon={<Plus size={16} />} 
                text="Add Task" 
                type="submit" 
                action="submit" 
            />
            <select 
                value={category} 
                onChange={(event) => setCategory(event.target.value)} 
                className="bg-transparent border border-zinc-400 p-2 rounded-md text-sm outline-violet-900 max-md:col-span-1">
                    <option value="" disabled>Categoria</option>
                    <option className="dark:text-zinc-950" value="Estudos">Estudos</option>
                    <option className="dark:text-zinc-950" value="Trabalho">Trabalho</option>
                    <option className="dark:text-zinc-950" value="Casa">Casa</option>
                    <option className="dark:text-zinc-950" value="Academia">Academia</option>
            </select>
            <input
                value={timeTerm} 
                onChange={(event) => setTimeTerm(event.target.value)} 
                className="bg-transparent border border-zinc-400 p-2 text-sm rounded-md outline-violet-900 max-md:col-span-1" 
                type="time" 
            />
            <input 
                value={dateTerm} 
                onChange={(event) => setDateTerm(event.target.value)} 
                className="bg-transparent border border-zinc-400 p-2 text-sm rounded-md outline-violet-900 max-md:col-span-1" 
                type="date" 
            />
            </form>
        </div>
    )
}

export default ToDoForm