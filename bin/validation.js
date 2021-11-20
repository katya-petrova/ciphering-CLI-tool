function checkConfig(config) {
    if (!config) {
    process.stderr.write('Error, no config provided' + '\n')
    process.exit(1)
  }
}

module.exports = checkConfig;
