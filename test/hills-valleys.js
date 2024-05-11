import test from "tape"

const a1 = [1,2,2]
const a2 = [1,0,1]
const a3 = [7,6,5,5,4,1]
const a4 = [3,4,1,1,6,5]

const hills = (arr) => {
console.log(arr)
}
const valleys = (arr) => {
console.log(arr)
}

test('Hills and valleys', (t) => {
    
    t.plan(8)
    testHills()
    testValleys()

    function testHills() {
        t.equal(hills(a1), 1)
        t.equal(hills(a2), 0)
        t.equal(hills(a3), 0)
        t.equal(hills(a4), 2)
    }
    
    function testValleys() {
        t.equal(valleys(a1), 0)
        t.equal(valleys(a2), 1)
        t.equal(valleys(a3), 0)
        t.equal(valleys(a4), 1)
    }
})