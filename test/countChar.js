import test from "tape"

const countChar = (text, char) => {
  let count = 0
  for (const letter of text) {
    if (letter === char) {
      ++count
    }
  }
  return count
}

test("Counts properly", (t) => {
  t.plan(3)
  t.isEqual(countChar("This is the first day of summer. It isn't hot.", "i"), 4)
  t.isEqual(countChar("Boo!", "o"), 2)
  t.isEqual(countChar("Right?", "Z"), 0)
})
