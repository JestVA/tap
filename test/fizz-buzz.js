import test from "tape"

import { fizzBuzzMock } from "./mocks.js"

test("FizzBuzz", (t) => {
  t.plan(100)
  for (let i = 1; i <= 100; i++) {
    t.equal(fizzBuzz(i), fizzBuzzMock[i - 1])
  }
})

function fizzBuzz(num) {
  let result = ""
  if (num % 3 == 0) {
    result += "Fizz"
  }
  if (num % 5 == 0) {
    result += "Buzz"
  }

  return result || num
}
