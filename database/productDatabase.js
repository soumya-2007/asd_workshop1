const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "db.json");


async function readData() {
    const products = await fs.promises.readFile(
        filePath,
        "utf-8"
    );

    console.log(products);

    return JSON.parse(products);
}


async function writeData(data) {
    await fs.promises.writeFile(
        filePath,
        JSON.stringify(data, null, 2)
    );
}

async function delayReadFile() {
    await new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });

    return await readData();
}

module.exports = {
    readData,
    writeData,
    delayReadFile
};
