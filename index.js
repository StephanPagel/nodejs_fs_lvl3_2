const { checkFolder, checkFile } = require("./function");

const dir = "./MyFunnyFolder";
const folder = "./What";
const file = "/isThis.txt";

console.log(checkFolder(dir));
console.log(checkFile(folder, file));
