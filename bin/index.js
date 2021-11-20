#! /usr/bin/env node
const { pipeline } = require("stream");

const checkConfig = require("./validation.js");

const {
  readStreamFunction,
  writeStreamFunction,
  transformStream,
} = require("./streams");
const caesarROT8 = require("./caesar.js");
const readArgs = require("./args.js");
let { config, input, output } = readArgs();

checkConfig(config);

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
