import sum from "../index";

test("Properly add two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});
