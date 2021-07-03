const solMerger = require('sol-merger');
const fs = require('fs');
const path = require('path');

async function mergeContract(contractFile) {
    let mergedCode = await solMerger.merge(contractFile);

    let outputFile = __dirname + "/../build/" + path.basename(contractFile) + ".merge.txt";
    outputFile = path.normalize(outputFile);
    fs.writeFileSync(outputFile, mergedCode);
    console.log("Output file:", outputFile);
}

async function main() {
    // await mergeContract("./contracts/PancakeRouter.sol");
    await mergeContract("./contracts/PancakeRouter01.sol");
}
main();