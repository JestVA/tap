import test from "tape"

const renderString = (i, isCheckered) => {
  const isEven = i % 2 === 0
  if (isEven) {
    return isCheckered ? " " : "#"
  } else {
    return isCheckered ? "#" : " "
  }
}
const addNewLineOnRowEnd = (rowEnd) => (rowEnd ? "\n" : "")
const incrementRow = (increment, row) => (increment ? row + 1 : row)
const chessboard = (size) => {
  let board = "\n"
  let row = 0

  for (let i = 1; i <= Math.pow(size, 2); i++) {
    const isRowEnd = i % size === 0
    const isCheckered = row % 2 !== 0
    board += renderString(i, isCheckered)
    board += addNewLineOnRowEnd(isRowEnd)
    row = incrementRow(isRowEnd, row)
  }
  return board
}

const chessboardString = `
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
`

test("Chessboard", (t) => {
  t.plan(1)
  t.equal(chessboard(8), chessboardString)
})

console.log(chessboard(8))
