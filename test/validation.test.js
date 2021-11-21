const { checkConfig, validateConfigArgs } = require("../bin/validation.js");

// testing of checkConfig function
// number of tests - 2

describe("Check if there's any config has been passed", () => {
  test("should return undefined when valid config is entered", () => {
    expect(checkConfig("C1")).toBe(undefined);
  });

  it("should return an error when invalid config is entered", async () => {
    const mockExit = jest
      .spyOn(process, "exit")
      .mockImplementation((number) => {
        throw new Error("process.exit: " + number);
      });
    expect(() => {
      checkConfig();
    }).toThrow();
    expect(mockExit).toHaveBeenCalledWith(1);
    mockExit.mockRestore();
  });
});

// testing of validateArgumentsConfig function
// number of tests - 3
//

describe("Check for correct config", () => {
  test("should return undefined when config is correct", () => {
    expect(validateConfigArgs(["-c", "C1-C1-R0-A"])).toBe(undefined);
  });

  it("should return an error when invalid config is entered", async () => {
    const mockExit = jest
      .spyOn(process, "exit")
      .mockImplementation((number) => {
        throw new Error("process.exit: " + number);
      });
    expect(() => {
      validateConfigArgs(["-c", "C1-C8-R0-A5"]);
    }).toThrow();
    expect(mockExit).toHaveBeenCalledWith(1);
    mockExit.mockRestore();
  });

  it("should return an error when invalid config is entered", async () => {
    const mockExit = jest
      .spyOn(process, "exit")
      .mockImplementation((number) => {
        throw new Error("process.exit: " + number);
      });
    expect(() => {
      validateConfigArgs(["--config", "F-C-R-A5"]);
    }).toThrow();
    expect(mockExit).toHaveBeenCalledWith(1);
    mockExit.mockRestore();
  });
});
