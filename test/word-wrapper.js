import test from "tape"
import { isAlphanumeric } from "../utils/index.js"

/**
 * 
       VERY difficult to traverse and reason about what's happening here
 */

       // Assert tests

       test("Breaks words to space", (t) => {

        function trim(text, lineLength) {
            // how does it deal with the edges?
            console.log(text)
        }

        t.plan(2)
        
        const t1 = trim("There goes, restroom is empty.", 10)
        const t2 = trim("Hello, world! I am hungry.", 10)

        t.assert(t1)
        t.assert(t2)

       })



       test("Can wrap words", (t) => {
        // test with long and short input cases
       })

        test("Wraps text to line length", (t) => {
            // unknown
        })

        test("Dashes are special", (t) => {
            // broken words get converted to dashes
        })

        test("Line does not start with non-alphanumeric character", (t) => {})



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
