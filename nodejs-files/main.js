const fs = require("fs").promises;
const path = require("path");


async function findFiles(folderName) {
  const items = await fs.readdir(folderName, { withFileTypes: true });
  items.forEach((item) => {
    if (path.extname(item.name) === ".json") {
      console.log(`Found file: ${item.name} in folder: ${folderName}`);
    } else {
      // this is a folder, so call this method again and pass in
      // the path to the folder
      findFiles(path.join(folderName, item.name));
    }
  });
}

findFiles("stores");
