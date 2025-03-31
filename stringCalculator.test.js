const stringCalculator = require("./stringCalculator");

describe("Testing String Calculator", () => {
  test("Testing with simple inputs", () => {
    expect(stringCalculator("")).toBe(0);
    expect(stringCalculator("1")).toBe(1);
    expect(stringCalculator("1,5")).toBe(6);
  });

});
