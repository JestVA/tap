import test from "tape"

const testArguments = [2, 4, 1, 3, -5, 6]

const maxProduct = (numList) => {
  const highToLow = (a, b) => b - a
  const sortedList = numList.sort(highToLow).slice(0, 3)
  return sortedList.reduce((a, c) => a * c)
}

test("Max product", (t) => {
  t.plan(1)
  t.isEqual(maxProduct(testArguments), 72)
})
