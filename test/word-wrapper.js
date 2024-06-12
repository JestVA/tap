import test from "tape"
import { isAlphanumeric } from "../utils/index.js"

// THE MOST BASIC TESTS - does the `f` return anything useful? Does it work? Is the return type the expected type?
test("Returns a string", (t) => {
    t.plan(4)
    t.equal(typeof wrap("This is a string", 1), "string", `Function returns a string value when called with arguments`)
    t.equal(wrap(undefined, undefined), "", `Returns an empty string if text is not passed to function`)
    t.equal(wrap("Another test case", undefined), "Another test case", `Returns original string when length is not passed`)
    t.equal(typeof wrap("Demo line", 0), "string", `Truncates to empty string when passed length is 0`)
})

function wrap(text, length) {
    if(length === 0) return ""
    if(!text) return ""
    if(length === undefined) return text
  

    // broken words get converted to dashes


    //return text
}