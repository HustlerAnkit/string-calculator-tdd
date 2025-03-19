import { add } from "./index";

test("empty string would return 0", () => {
  expect(add("")).toBe(0);
});
