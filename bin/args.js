const args = process.argv.slice(2);
const argsTypes = ["-c --config", "-i --input", "-o --output"];

args.forEach(element => {
    console.log(element);
});
