// test/calculator.test.js
const chai = require("chai");
const expect = chai.expect;
const { add } = require("../src/add");

describe("Add tests", function () {
  it("should add two positive numbers correctly", () => {
    expect(add(5, 3)).to.equal(8);
  });

  it("should add two negative numbers correctly", () => {
    expect(add(-5, -3)).to.equal(-8);
  });

  it("should add a positive and a negative number correctly", () => {
    expect(add(-5, 10)).to.equal(5);
  });
});
