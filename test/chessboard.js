import test from "tape"

const renderString = (i, invert) => {
  if (i % 2 === 0) {
    return invert ? " " : "#"
  } else {
    return invert ? "#" : " "
  }
}

const chessboard = (size) => {
  let board = "\n"
  let row = 0
  for (let i = 1; i <= Math.pow(size, 2); i++) {
    board += renderString(i, row % 2 !== 0)
    if (i % size === 0) {
      board += "\n"
      row += 1
    }
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
