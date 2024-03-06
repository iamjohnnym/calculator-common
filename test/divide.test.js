// test/calculator.test.js
const chai = require("chai");
const expect = chai.expect;
const { divide } = require("../src/divide");

describe("Divide tests", function () {
  it("should divide two numbers correctly", () => {
    expect(divide(10, 2)).to.equal(5);
  });

  it("should throw an error when dividing by zero", () => {
    expect(() => divide(5, 0)).to.throw("Division by zero is not allowed.");
  });
});
