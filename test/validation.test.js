const validation = require("../bin/validation");

test('should return undefined', () => {
    expect(validation('C1')).toBe(undefined);
  });

  it('should return error', async () => {
    const mockExit = jest.spyOn(process, 'exit')
        .mockImplementation((number) => { throw new Error('process.exit: ' + number); });
    expect(() => {
        validation();
    }).toThrow();
    expect(mockExit).toHaveBeenCalledWith(1);
    mockExit.mockRestore();
  });