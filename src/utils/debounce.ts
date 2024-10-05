export const debounce = (func: Function, time: number) => {
  let timeout: ReturnType<typeof setTimeout>
  return function (this: any, ...args: any[]) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), time)
  }
}
