import test from "tape"
import { isAlphanumeric } from "../utils/index.js"

const wrap = (text, length) => {
  if (text.length <= length) return text
  let lineLength = 0
  let words = text.split(" ").reduce((result, word) => {
    if (word.length <= length - lineLength) {
      lineLength += word.length
      return result + word
    } else {
      return result + "\n" + word
    }
  }, "")

  console.log(words)
  return words
}

// test cases
// line must not start with a non-alphanumeric character

test("Line must not start with non-alphanumeric character", (t) => {
  const length = 3

  const wrapped = wrap("This is anime", length).split("\n")

  t.plan(wrapped.length)

  wrapped.forEach((line) => {
    if (line.length === 0) {
      console.log("returning here...??")
      return t.assert(true)
    }

    t.assert(isAlphanumeric(line[0]))
  })
})
