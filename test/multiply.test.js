// test/calculator.test.js
const chai = require("chai");
const expect = chai.expect;
const { multiply } = require("../src/multiply");

describe("Multiply tests", function () {
  it("should multiply two numbers correctly", () => {
    expect(multiply(3, 4)).to.equal(12);
  });

  it("should handle multiplication by zero correctly", () => {
    expect(multiply(5, 0)).to.equal(0);
  });
});
