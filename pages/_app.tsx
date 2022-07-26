import { useState, useCallback } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Header from '@components/Header'
import LeftNav from '@components/LeftNav'
import BodyBlackout from '@components/BodyBlackout'
import SearchContainer from '@components/SearchContainer'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [searchOn, setSearchOn] = useState(false)
  const onSetIsVisible = useCallback(
    (active: boolean) => {
      setIsVisible(active)
    },
    [setIsVisible],
  )
  const onSetSearchOn = useCallback(
    (active: boolean) => {
      setSearchOn(active)
    },
    [setSearchOn],
  )
  return (
    <ThemeProvider attribute="class">
      <Header
        onSetIsVisible={onSetIsVisible}
        onSetSearchOn={onSetSearchOn}
        isSearchOn={searchOn}
      />
      <LeftNav isVisible={isVisible} />
      <BodyBlackout isVisible={isVisible} onSetIsVisible={onSetIsVisible} />
      <SearchContainer isSearchOn={searchOn} onSetSearchOn={onSetSearchOn} />
      <div className="mt-[60px]">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
