import React from 'react'
import { useTheme } from 'next-themes'

export default function ToggleBtnDarkMode() {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <div
      onClick={toggleTheme}
      className="toggle-button relative mx-auto h-[30px] w-[60px] cursor-pointer"
    >
      <div className="toggle-button-switch absolute top-[2px] left-[2px] h-[26px] w-[26px] rounded-full bg-white transition-[left] duration-300 dark:left-[32px]"></div>
      <div className="toggle-button-text flex h-full rounded-[20px] bg-green-500 text-white shadow-2xl transition-[background-color] duration-300 dark:bg-red-500">
        <div className="w-1/2 text-center leading-[40px]"></div>
        <div className="w-1/2 text-center leading-[40px]"></div>
      </div>
    </div>
  )
}
