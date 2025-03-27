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

test("handle line breaker and comma as a string separator", () => {
  expect(add("1\n2,3")).toBe(6);
  expect(add("1\n2\n3,4")).toBe(10);
});

test("handle custom separator", () => {
  expect(add("//|\n1|2|3")).toBe(6);
  expect(add("//:\n1:2:3:4:5")).toBe(15);
  expect(add("//-\n1-2-3-4-5-6")).toBe(21);
});

test("should throw exception  for negative number", () => {
  expect(() => add("-2")).toThrow("negative numbers are not allowed: -2");
  expect(() => add("1,-1,3,-5")).toThrow(
    "negative numbers are not allowed: -1,-5"
  );
});
