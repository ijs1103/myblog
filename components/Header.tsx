import { useState, useEffect } from 'react'
import { memo } from 'react';
import Link from "next/link";
import { cls, throttle } from '@libs/utils';
import ToggleBtnDarkMode from './ToggleBtnDarkMode';
import { toggleFn } from '@libs/types';
interface Props {
	onSetIsVisible: toggleFn;
	onSetSearchOn: toggleFn;
	isSearchOn: boolean;
}

const Header = ({onSetIsVisible, onSetSearchOn, isSearchOn}: Props) => {
	const [isScrollDown, setIsScrollDown] = useState(false);
	const onScroll = () => {
		window.scrollY > 60 ? setIsScrollDown(true) : setIsScrollDown(false);
	}
	useEffect(()=>{
		window.addEventListener('scroll', throttle(onScroll, 100));
		return () => {
			window.removeEventListener('scroll', throttle(onScroll, 100));
		};
	},[]);
	return (
		<header className={cls('fixed top-0 left-0 w-full bg-white dark:bg-[#282C34] border-b-gray-300 h-[60px] z-[1000]', isScrollDown ? 'bg-opacity-60' : 'bg-opacity-100')}>
			<div className='px-6 h-full flex justify-between items-center text-black dark:text-white'>
				<div className='flex items-center'>
					<svg onClick={() => onSetIsVisible(true)} className="w-8 h-8 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
					<span className='hidden sm:block h-[18px] mx-[20px] border-l border-gray-400'></span>
					<Link href='/'>
						<a className='ml-3 sm:ml-0'>
							<div className='cursor-pointer text-2xl'>로고</div>
						</a>
					</Link>
				</div>
				<div className='flex items-center'>
					<ToggleBtnDarkMode />
					<span className='hidden sm:block h-[18px] mx-[20px] border-l border-gray-400'></span>
					{ !isSearchOn ? <svg onClick={() => onSetSearchOn(true)} className="hidden sm:block w-6 h-6 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
					: <svg onClick={() => onSetSearchOn(false)} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> }
				</div>
			</div>
		</header>
	)
};
export default memo(Header);