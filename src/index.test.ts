import { add } from "./index";

test("empty string would return 0", () => {
  expect(add("")).toBe(0);
});

test("individual number would return itself", () => {
  expect(add("1")).toBe(1);
  expect(add("2")).toBe(2);
  expect(add("10")).toBe(10);
});

test("numbers separated by comma should return sum", () => {
  expect(add("1,2")).toBe(3);
  expect(add("1,2,3")).toBe(6);
});

test("should throw exception  for negative number", () => {
  expect(() => add("-2")).toThrow("negative numbers not allowed: -2");
  expect(() => add("1,-1,3,-5")).toThrow("negative numbers not allowed: -1,-5");
});
