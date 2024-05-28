export const compose = (input, fn) => fn(input)
export const partialPrefill = (fn, prefill) => (liveInput) =>
  fn(liveInput, prefill)
export const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x)
export const isAlphanumeric = (test) => {
  console.log("test case for alphanumeric", test)
  return Boolean(test.match(/^[0-9a-zA-Z]+$/))
}
