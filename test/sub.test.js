// test/calculator.test.js
const chai = require("chai");
const expect = chai.expect;
const { subtract } = require("../src");

describe("Subtract tests", function () {
  it("should subtract two numbers correctly", () => {
    expect(subtract(10, 5)).to.equal(5);
  });

  it("should handle negative result correctly", () => {
    expect(subtract(5, 10)).to.equal(-5);
  });
});
