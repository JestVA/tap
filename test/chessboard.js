import test from "tape"

/*

V2. A functional approach to building the chessboard.
Already apparent that less code is needed for the same functionality.

*/

const create = (squares, fn, size, index) => fn(squares, size, index)
const chessboard = (size, instructions, create, board) => {
  for (let j = 1; j <= size ** 2; j++) {
    for (let i = 0; i < instructions.length; i++) {
      board = create(board, instructions[i], size, j)
    }
  }
  return board
}
const renderSquare = (sq) => (sq.length % 2 === 0 ? sq + "#" : sq + " ")
const addNewLineOnRowEnd = (r, size, i) => (i % size === 0 ? r + "\n" : r)

const board = chessboard(8, [renderSquare, addNewLineOnRowEnd], create, "\n")

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

test("Fun(ctional) chessboard", (t) => {
  t.plan(1)
  t.equal(board, chessboardString)
})

console.log(board)

/* 

V1. Untangled, but not yet "functional"
Although a bit more declarative, it is still tightly coupled with logic

const renderString = (i, isCheckered) => {
  const isEven = i % 2 === 0
  const hash = "#"
  const empty = " "
  return isEven ? (isCheckered ? empty : hash) : isCheckered ? hash : empty
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

*/
