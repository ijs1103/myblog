import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { cls } from '@libs/utils'
import CategoryBtn from '@components/CategoryBtn'


interface Props {
  category: string
  title: string
  date: string
  slug: string
  tag: string
}
function Card({ tag, category, title, date, slug }: Props) {
  return (
    <Link href={`/blog/${category}/${slug}`}>
      <a>
        <article className="card">
          <div className="card__img"></div>
          <div className="card__img--hover"></div>
          <div className="card__info">
            <span className="card__keyword">{date}</span>
            <h3 className="card__title">{title}</h3>
            <div className='flex flex-wrap gap-2'>
              <CategoryBtn>{tag}</CategoryBtn>
            </div>
          </div>
          <style jsx>{`
            .card__img,
            .card__img--hover {
              background-image: url('https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
            }
            .card__img {
              visibility: hidden;
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
              width: 100%;
              height: 235px;
              border-top-left-radius: 12px;
              border-top-right-radius: 12px;
            }

            .card__info-hover {
              position: absolute;
              padding: 16px;
              width: 100%;
              opacity: 0;
              top: 0;
            }

            .card__img--hover {
              transition: 0.2s all ease-out;
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
              width: 100%;
              position: absolute;
              height: 235px;
              border-top-left-radius: 12px;
              border-top-right-radius: 12px;
              top: 0;
            }
            .card {
              transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
              background-color: #fff;
              width: 400px;
              position: relative;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
            }
            .card:hover {
              box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
              transform: scale(1.1, 1.1);
            }

            .card__info {
              z-index: 2;
              background-color: #fff;
              border-bottom-left-radius: 12px;
              border-bottom-right-radius: 12px;
              padding: 16px 24px 24px 24px;
            }

            .card__title {
              margin-top: 5px;
              margin-bottom: 10px;
              color: #000;
              font-family: 'Roboto Slab', serif;
              font-size: 24px;
            }

            .card__keyword {
              font-size: 12px;
              font-family: 'Raleway', sans-serif;
              font-weight: 600;
              text-decoration: none;
              color: #ad7d52;
            }

            .card:hover .card__img--hover {
              height: 100%;
              opacity: 0.3;
            }

            .card:hover .card__info {
              background-color: transparent;
              position: relative;
            }

            .card:hover .card__info-hover {
              opacity: 1;
            }
          `}</style>
        </article>
      </a>
    </Link>
  )
}

export default Card
