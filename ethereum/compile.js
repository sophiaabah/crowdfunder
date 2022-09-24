const path = require("path");
const solc = require("solc");
const fs = require("fs-extra"); //gives access to the file system locally on ur computer

const buildPath = path.resolve(__dirname, "build"); // first argument is code for the current directory.
fs.removeSync(buildPath); //to delete the folder

const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf8");
const output = solc.compile(source, 1).contracts; //we need to loop over this because it contains two contracts which we will write to two separate files

fs.ensureDirSync(buildPath); //checks for a directory, creates it if it doesnt exist.
console.log("output:", output);
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}
