export const debounce = (func: Function, time: number) => {
  let timeout: ReturnType<typeof setTimeout>
  return function (...args: any[]) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(args), time)
  }
}
