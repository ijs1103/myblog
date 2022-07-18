import React from 'react'
import { useTheme } from 'next-themes'

export default function ToggleBtnDarkMode() {
	const { theme, setTheme } = useTheme();
	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	};
	return (
		<div onClick={toggleTheme} className="toggle-button relative w-[60px] h-[30px] cursor-pointer mx-auto">
			<div
				className="toggle-button-switch absolute dark:left-[32px] top-[2px] left-[2px] w-[26px] h-[26px] bg-white rounded-full transition-[left] duration-300">
			</div>
			<div
				className="toggle-button-text h-full flex shadow-2xl text-white bg-green-500 dark:bg-red-500 rounded-[20px] transition-[background-color] duration-300">
				<div className="w-1/2 leading-[40px] text-center"></div>
				<div className="w-1/2 leading-[40px] text-center"></div>
			</div>
		</div>
	)
}

