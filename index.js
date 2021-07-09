
  /**
  * 
  * Problem: 
  * Your task is to make a function that can take any non-negative integer as an argument 
  * and return it with its digits in descending order. 
  * Essentially, rearrange the digits to create the highest possible number.
  *
  **/
  
var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('chai').assert

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(descendingOrder(0), 0)
    assert.strictEqual(descendingOrder(1), 1)
    assert.strictEqual(descendingOrder(111), 111)
    assert.strictEqual(descendingOrder(15), 51)
    assert.strictEqual(descendingOrder(1021), 2110)
    assert.strictEqual(descendingOrder(123456789), 987654321)
    })
  })

//exam
function descendingOrder(n){
  console.log(n)
}