import Link from 'next/link';
import React from 'react'

interface Props{
	children: React.ReactNode;
	link: string;
}
function CategoryBtn({children, link}: Props) {
	return (
		<Link href={link}><a className='rounded-xl bg-secondary hover:brightness-110 hover:text-gray-200 p-1 text-sm text-white'>{children}</a></Link>
	)
}

export default CategoryBtn