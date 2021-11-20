#! /usr/bin/env node
const { pipeline } = require("stream");
const args = process.argv.slice(2);
const {checkConfig, validateConfigArgs} = require("./validation.js");

const {
  readStreamFunction,
  writeStreamFunction,
  transformStream,
} = require("./streams");
const caesarROT8 = require("./caesar.js");
const readArgs = require("./args.js");
let { config, input, output } = readArgs(args);

checkConfig(config);

validateConfigArgs([args[0], config])

config = config.split("-");

const read = readStreamFunction(input);
const write = writeStreamFunction(output);
const transform = new transformStream(caesarROT8, config);

pipeline(read, transform, write, (err) => {
  if (err) {
    console.error("Operation failed :(", err);
  } else {
    console.log("Operation succeeded, check the output.txt file!");
  }
});
