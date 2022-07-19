import Link from 'next/link'
import React from 'react'

interface Props {
  children: React.ReactNode
  link: string
}
function CategoryBtn({ children, link }: Props) {
  return (
    <Link href={link}>
      <a className="rounded-xl bg-secondary p-1 text-sm text-white hover:text-gray-200 hover:brightness-110">
        {children}
      </a>
    </Link>
  )
}

export default CategoryBtn
