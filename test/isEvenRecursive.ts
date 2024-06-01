const isEven = (num) => {
  if (num === 0) return true
  if (num === 1) return false
  return isEven(Math.abs(num) - 2)
}
