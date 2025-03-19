import { add } from "./index";

test("empty string would return 0", () => {
  expect(add("")).toBe(0);
});

test("individual number would return itself", () => {
  expect(add("1")).toBe(1);
  expect(add("2")).toBe(2);
  expect(add("10")).toBe(10);
});
