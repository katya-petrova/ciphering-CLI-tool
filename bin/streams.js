const fs = require("fs");
const path = require("path");
const stream = require("stream");

function exitProcess(message, code) {
  process.stderr.write(message + "\n");
  process.exit(code);
}

function validatePath(pathToCheck) {
  let validatedPath = pathToCheck;

  if (!path.isAbsolute(pathToCheck))
    validatedPath = path.resolve(validatedPath);

  return fs.existsSync(validatedPath);
}

const readStreamFunction = (input) => {


  return input
    ? validatePath(input)
      ? fs.createReadStream(path.join(__dirname, "..", input))
      : exitProcess(`Something is wrong with input path: ${input}`, 1)
    : process.stdin;
};

const writeStreamFunction = (output) => {
  return output
    ? validatePath(output)
      ? fs.createWriteStream(path.join(__dirname, "..", output), {
          flags: "a+",
        })
      : exitProcess(`Something is wrong with output path: ${output}`, 1)
    : process.stdout;
};

class transformStream extends stream.Transform {
  constructor(func, config) {
    super();
    this.func = func;
    this.config = config;
  }

  _transform(data, encoding, callback) {
    this.push(this.func(data.toString(), this.config));
    callback();
  }
}

module.exports = {
  readStreamFunction,
  writeStreamFunction,
  transformStream,
};
