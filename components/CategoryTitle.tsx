import React from 'react'
import { cls } from '@libs/utils'
// 쿼리스트링으로 카테고리값 가져오기 => 서브타이틀에 카테고리 넣어주기
//                             => 로더에 카테고리 넣어주기
//                              => 본문에 카테고리 넣어주기
interface Props {
  category: string
}
function CategoryTitle({ category }: Props) {
  return (
    <div
      className={cls(
        'flex h-[60px] justify-center dark:bg-header bg-white sm:h-[120px] ',
        `text-${category}`,
      )}
    >
      <h2 className="text-3xl font-bold sm:text-4xl">{category}</h2>
    </div>
  )
}

export default CategoryTitle
