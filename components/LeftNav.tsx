import { memo } from 'react'
import Image from 'next/image'
import profilePic from '../public/images/profile_default.png'
import { readdirSync, readFileSync } from 'fs'
import { cls } from '@libs/utils'
import Link from 'next/link'

interface Props {
  isVisible: boolean
}
function LeftNav({ isVisible }: Props) {
  //const categories = readdirSync('./md')
  //console.log(categories)
  return (
    <nav
      className={cls(
        'fixed top-0 bottom-0 left-0 z-[1001] w-40 overflow-auto bg-leftnav md:w-[250px]',
        isVisible ? 'block' : 'hidden',
      )}
    >
      <div className="absolute top-0 h-[100px] w-full bg-primary"></div>
      <div className="relative h-[calc(100%-70px)] text-[#F6F5FF]">
        <div className="mt-[70px] flex flex-col items-center space-y-2">
          <Image
            width={100}
            height={100}
            placeholder="blur"
            className="rounded-full"
            src={profilePic}
            alt="profile-image"
          />
          <h3>홍길동</h3>
        </div>
        <ul className="mt-4 border-t border-gray-600">
          {['react', 'next', 'javascript', 'typescript', 'web', 'etc'].map(
            (cur, idx) => {
              return (
                <Link key={idx} href={`/blog/${cur}/posts`}>
                  <a>
                    <li
                      
                      className="cursor-pointer px-2 py-2 text-sm hover:bg-gray-500 hover:text-primary md:px-3  md:py-3 md:text-2xl"
                    >
                      {cur}
                    </li>
                  </a>
                </Link>
              )
            }
          )}
        </ul>
        <ul className="absolute bottom-0 left-0 flex w-full items-center justify-between border-t border-gray-600 px-3 py-3 ">
          <li className="cursor-pointer">
            <svg
              width="40"
              height="40"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30 0C13.425 0 0 13.425 0 30C0 43.275 8.5875 54.4875 20.5125 58.4625C22.0125 58.725 22.575 57.825 22.575 57.0375C22.575 56.325 22.5375 53.9625 22.5375 51.45C15 52.8375 13.05 49.6125 12.45 47.925C12.1125 47.0625 10.65 44.4 9.375 43.6875C8.325 43.125 6.825 41.7375 9.3375 41.7C11.7 41.6625 13.3875 43.875 13.95 44.775C16.65 49.3125 20.9625 48.0375 22.6875 47.25C22.95 45.3 23.7375 43.9875 24.6 43.2375C17.925 42.4875 10.95 39.9 10.95 28.425C10.95 25.1625 12.1125 22.4625 14.025 20.3625C13.725 19.6125 12.675 16.5375 14.325 12.4125C14.325 12.4125 16.8375 11.625 22.575 15.4875C24.975 14.8125 27.525 14.475 30.075 14.475C32.625 14.475 35.175 14.8125 37.575 15.4875C43.3125 11.5875 45.825 12.4125 45.825 12.4125C47.475 16.5375 46.425 19.6125 46.125 20.3625C48.0375 22.4625 49.2 25.125 49.2 28.425C49.2 39.9375 42.1875 42.4875 35.5125 43.2375C36.6 44.175 37.5375 45.975 37.5375 48.7875C37.5375 52.8 37.5 56.025 37.5 57.0375C37.5 57.825 38.0625 58.7625 39.5625 58.4625C45.5179 56.4518 50.6929 52.6242 54.3592 47.5184C58.0254 42.4126 59.9982 36.2857 60 30C60 13.425 46.575 0 30 0Z"
                fill="#7000DF"
              />
            </svg>
          </li>
          <li className="cursor-pointer">
            <svg
              width="40"
              height="40"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 0C3.345 0 0 3.345 0 7.5V52.5C0 56.655 3.345 60 7.5 60H52.5C56.655 60 60 56.655 60 52.5V7.5C60 3.345 56.655 0 52.5 0H7.5ZM24.7075 15.625C26.2825 15.625 27.22 16.375 27.52 17.875L31.1775 38.6325C32.34 37.095 33.2925 35.8 34.0425 34.75C35.2851 32.9591 36.3588 31.0568 37.25 29.0675C38.2625 26.93 38.77 25.0175 38.77 23.33C38.77 22.3175 38.4875 21.5125 37.925 20.9125C37.4 20.275 36.405 19.47 34.9425 18.495C36.4425 16.5825 38.3175 15.625 40.5675 15.625C41.7675 15.625 42.7625 15.9825 43.55 16.695C44.375 17.4075 44.785 18.455 44.785 19.845C44.785 22.17 43.81 25.0775 41.86 28.565C39.9475 32.015 36.2575 37.2075 30.7825 44.145L25.215 44.535L20.9375 20.465H15.3125V18.1C16.8125 17.6125 18.575 17.085 20.6 16.525C22.625 15.925 23.995 15.625 24.7075 15.625V15.625Z"
                fill="#7000DF"
              />
            </svg>
          </li>
          <li className="cursor-pointer">
            <svg
              width="40"
              height="40"
              viewBox="0 0 60 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41.21 19.94L56.5875 6.58V33.1475L41.21 19.94ZM21.395 22.2025L26.795 26.89C27.6425 27.61 28.7475 28.045 29.955 28.045H29.9975H29.995H30.03C31.24 28.045 32.345 27.6075 33.2025 26.8825L33.195 26.8875L38.595 22.2L55.01 36.2975H4.9875L21.395 22.2025ZM4.965 3.4125H55.04L30.9875 24.3025C30.7171 24.5164 30.3823 24.6327 30.0375 24.6325H30.0025H30.005H29.97C29.624 24.6329 29.2881 24.5157 29.0175 24.3L29.02 24.3025L4.965 3.4125ZM3.4125 6.5775L18.7875 19.9375L3.4125 33.1375V6.5775ZM57.4125 0.475C56.8125 0.175 56.1075 0 55.36 0H4.6475C3.9229 0.000173087 3.20826 0.168777 2.56 0.4925L2.5875 0.48C1.81143 0.862778 1.15787 1.45495 0.700636 2.18961C0.243402 2.92428 0.000718371 3.77217 0 4.6375L0 35.0675C0.00132351 36.299 0.491131 37.4797 1.36195 38.3505C2.23277 39.2214 3.41348 39.7112 4.645 39.7125H55.3525C56.584 39.7112 57.7647 39.2214 58.6355 38.3505C59.5064 37.4797 59.9962 36.299 59.9975 35.0675V4.6375C59.9975 2.82 58.95 1.245 57.425 0.4875L57.3975 0.475H57.4125Z"
                fill="#7000DF"
              />
            </svg>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default memo(LeftNav)
