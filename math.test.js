const { add, subtract, divide, multiply } = require("./math");

describe("Math.js tests", () => {
  it("should test add", () => {
    expect(add(2, 2)).toBe(4);
  });

  it("Should test subtract", () => {
    expect(subtract(2, 2)).toBe(0);
  });

  it("Should test divide", () => {
    expect(divide(4, 2)).toBe(11);
  });

  it("Should test multiply", () => {
    expect(multiply(2, 2)).toBe(4);
  });
});
