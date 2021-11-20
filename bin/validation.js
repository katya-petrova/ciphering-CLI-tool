function checkConfig(config) {
  if (!config) {
    process.stderr.write("Error, no config provided" + "\n");
    process.exit(1);
  }
}

function getConfigArgs(index, configArg) {
  const i = configArg.indexOf(index);
  return i !== -1 ? configArg[i + 1].trim() : null;
}

function showError() {
  process.stderr.write("Config argument is incorrect or missing!" + "\n");
  process.exit(1);
}

 function validateConfigArgs(configArg) {
  const regexp = /^((C[0,1])+[-]?|(R[0,1])+[-]?|(A)+[-]?)+$/g;
  let index;
  configArg.indexOf("-c") != -1
    ? (index = configArg.indexOf("-c"))
    : (index = configArg.indexOf("--config"));
  if (!regexp.test(getConfigArgs(configArg[index], configArg))) {
    showError();
  }
   
}

module.exports = { checkConfig, validateConfigArgs };
