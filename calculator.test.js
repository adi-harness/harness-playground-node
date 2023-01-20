const calculator = require("./calculator");

test("adding two numbers", () => {
  expect(calculator.add("5,6")).toBe(10);
});
