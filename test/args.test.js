const parseArgs = require("../bin/args");

test('should return undefined when valid arguments are entered', () => {
    expect(parseArgs(["-c", "C1-C1-R0-A", "-i", "./input.txt", "-o", "./output.txt"])).toEqual({ config: 'C1-C1-R0-A', input: './input.txt', output: './output.txt' });
  });

  it('should return error when invalid arguments are entered', async () => {
    const mockExit = jest.spyOn(process, 'exit')
        .mockImplementation((number) => { throw new Error('process.exit: ' + number); });
    expect(() => {
        parseArgs(['yggj']);
    }).toThrow();
    expect(mockExit).toHaveBeenCalledWith(1);
    mockExit.mockRestore();
  });

  it('should return an error when input file is missing', async () => {
    const mockExit = jest.spyOn(process, 'exit')
        .mockImplementation((number) => { throw new Error('process.exit: ' + number); });
    expect(() => {
        parseArgs(["-c", "C1-C1-R0-A", "-i", "-o", "./output.txt"]);
    }).toThrow();
    expect(mockExit).toHaveBeenCalledWith(1);
    mockExit.mockRestore();
  });
