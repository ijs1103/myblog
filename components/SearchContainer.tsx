import React from 'react'
import Link from 'next/link'
import CategoryBtn from '@components/CategoryBtn'
import { cls } from '@libs/utils'
import { toggleFn } from '@libs/types'

interface Props {
  onSetSearchOn: toggleFn
  isSearchOn: boolean
}
function SearchContainer({ onSetSearchOn, isSearchOn }: Props) {
  return (
    <div
      className={cls(
        'top-0 bottom-0 right-0 left-0 z-10 flex h-full w-full items-center justify-center bg-white ',
        isSearchOn ? 'fixed' : 'hidden',
      )}
    >
      <div className="h-[440px] px-10 lg:w-[800px]">
        <div className="relative w-full  border-b p-3 pr-8">
          <input
            className="h-full w-full bg-white text-sm text-black outline-none lg:text-lg"
            type="text"
            placeholder="검색어를 입력해주세요"
          />
          <svg
            className="absolute top-1/2 right-0 h-6 w-6 -translate-y-1/2 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            (cur) => {
              return (
                <CategoryBtn key={cur} link="/">
                  다형성
                </CategoryBtn>
              )
            },
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchContainer
