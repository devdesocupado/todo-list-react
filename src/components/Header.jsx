import React from 'react'
import Button from './Button'
import { MoonIcon, Sun } from 'lucide-react'

const Header = ({ handleChangeTheme, theme }) => {
  return (
    <header className="border-b border-zinc-400 p-4 relative">
        <h1 className="font-bold text-3xl text-center">ToDo List</h1>
        <div className="absolute right-6 top-5">
          <Button 
          type="button" 
          icon={<MoonIcon size={19} />} 
          action="toggleTheme" 
          alternateIcon={<Sun size={19} />} 
          theme={theme}
          handleChangeTheme={handleChangeTheme} 
        />
        </div>
    </header>
  )
}

export default Header