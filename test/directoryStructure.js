import fs from 'fs';
import path from 'path';

async function printDirectoryStructure(rootDir, indent = '') {
  try {
    const filesAndDirs = await fs.promises.readdir(rootDir);

    for (const item of filesAndDirs) {
      const itemPath = path.join(rootDir, item);

      console.log(indent + '|-- ' + item);

      try {
        const stats = await fs.promises.stat(itemPath);

        if (stats.isDirectory()) {
          await printDirectoryStructure(itemPath, indent + '   ');
        }
      } catch (err) {
        console.error(`Error stating file: ${err.message}`);
      }
    }
  } catch (err) {
    console.error(`Error reading directory: ${err.message}`);
  }
}

const rootDirectory = '/home/devfrend/Desktop/dirstructure';
console.log(rootDirectory);
printDirectoryStructure(rootDirectory);
