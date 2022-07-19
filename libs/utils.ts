export function cls(...classnames: string[]) {
  return classnames.join(' ')
}
type TIMERID = ReturnType<typeof setTimeout> | null
export const throttle = (callback: Function, time: number) => {
  let timerId: TIMERID = null
  return () => {
    if (timerId) return
    timerId = setTimeout(() => {
      callback()
      timerId = null
    }, time)
  }
}
