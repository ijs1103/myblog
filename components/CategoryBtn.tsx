import Link from 'next/link'
import React from 'react'

interface Props {
  children: React.ReactNode
  link?: string
}
function CategoryBtn({ children, link }: Props) {
  return (
    <Link href={link ? link : '/'}>
      <a onClick={e => !link && e.preventDefault()} className="transition duration-300 rounded-xl bg-[darkgray] hover:bg-gray-400 px-2 py-1 font-bold text-sm text-white hover:text-gray-900 hover:brightness-110">
        {children}
      </a>
    </Link>
  )
}

export default CategoryBtn
