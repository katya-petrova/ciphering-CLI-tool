// const args = process.argv.slice(2);
const argsTypes = ["-c --config", "-i --input", "-o --output"];
const map = new Map();
const argsMap = {};

function parseArgs(args) {
  for (let i = 0; i < args.length; i += 2) {
    const findArgIndex = argsTypes.findIndex((type) => {
      const splittedType = type.split(" ");
      return (
        args[i] === splittedType[0] ||
        args[i] === splittedType[1]
      );
    });

    if (findArgIndex !== -1) {
      const foundType = argsTypes[findArgIndex];
      if (!map.has(foundType)) {
        map.set(foundType, args[i + 1]);
      }
    } else {
      handleError(new Error("There's something wrong with arguments, please, reenter"));
    }
  }

  map.forEach((val, key) => {
    const mapKey = key.split(" ")[1].slice(2);
    argsMap[mapKey] = val;
  });

  return argsMap;
}

function handleError(err) {
  if (err) {
    process.stderr.write(err.message + "\n");
    process.exit(1);
  }
}

module.exports = parseArgs;
