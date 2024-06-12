export const compose = (input, fn) => fn(input)
export const partialPrefill = (fn, prefill) => (liveInput) =>
  fn(liveInput, prefill)
export const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x)
export const isAlphanumeric = (test) => {
  return Boolean(test.match(/^[0-9a-zA-Z]+$/))
}
export const wait = duration => new Promise((resolve) => setTimeout(resolve, duration))