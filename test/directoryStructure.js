import fs from 'fs';
import path from 'path';

function printDirectoryStructure(rootDir) {

    fs.readdir(rootDir, (err, filesAndDirs) => {
        if (err) {
            console.error(`Error reading directory: ${err.message}`);
            return;
        }

        filesAndDirs.forEach((item) => {
            // Create the full path of the item
            const itemPath = path.join(rootDir, item);

            console.log('|-- ' + item);

            fs.stat(itemPath, (err, stats) => {
                if (err) {
                    console.error(`Error stating file: ${err.message}`);
                    return;
                }
                
                if (stats.isDirectory()) {
                    printDirectoryStructure(itemPath, indent + '    ');
                }
            });
        });
    });
}

const rootDirectory = '/home/devfrend/Downloads';
console.log(rootDirectory);
console.log(printDirectoryStructure(rootDirectory));