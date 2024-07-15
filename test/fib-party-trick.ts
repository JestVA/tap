/*
*
* Using the golden ratio (phi) to solve the Fibonacci sequence 
* 
*
* */
function fibonacciPartyTrick(n: number) {
  const root = Math.sqrt(5)
  const PHI = (1 + root) /2
  return Math.round((PHI ** n - (1 - PHI) ** n) / root)
}
