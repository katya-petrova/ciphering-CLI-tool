const {
  checkConfig,
  validateArgumentsConfig,
} = require("../bin/validation.js");

test("should return undefined when valid config is entered", () => {
  expect(checkConfig("C1")).toBe(undefined);
});

it("should return an error when invalid config is entered", async () => {
  const mockExit = jest.spyOn(process, "exit").mockImplementation((number) => {
    throw new Error("process.exit: " + number);
  });
  expect(() => {
    checkConfig();
  }).toThrow();
  expect(mockExit).toHaveBeenCalledWith(1);
  mockExit.mockRestore();
});

test("should return undefined when config is correct", () => {
  expect(validateArgumentsConfig(["-c", "C1-C1-R0-A"])).toBe(undefined);
});

it("should return an error when invalid config is entered", async () => {
  const mockExit = jest.spyOn(process, "exit").mockImplementation((number) => {
    throw new Error("process.exit: " + number);
  });
  expect(() => {
    validateArgumentsConfig(["-c", "C1-C8-R0-A5"]);
  }).toThrow();
  expect(mockExit).toHaveBeenCalledWith(1);
  mockExit.mockRestore();
});

it("should return an error when invalid config is entered", async () => {
  const mockExit = jest.spyOn(process, "exit").mockImplementation((number) => {
    throw new Error("process.exit: " + number);
  });
  expect(() => {
    validateArgumentsConfig(["--config", "F-C-R-A5"]);
  }).toThrow();
  expect(mockExit).toHaveBeenCalledWith(1);
  mockExit.mockRestore();
});
