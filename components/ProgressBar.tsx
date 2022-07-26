import { useState, useRef } from 'react'
import useIO from '@libs/useIO'

interface Props {
  currentProgress: number
}
function ProgressBar({ currentProgress = 0 }: Props) {
  // const [ isViewport, setIsViewport ] = useState(false)
  // const ref = useRef(null)
  // const isIntersecting = useIO()
  return (
    <progress
      className="appearance-none"
      id="progress"
      max="100"
      value={currentProgress}
    ></progress>
  )
}

export default ProgressBar
