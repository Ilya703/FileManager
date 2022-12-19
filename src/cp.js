import { existsSync, createReadStream, createWriteStream } from 'fs';
import add from '../src/add.js';
import path from 'path';

const cp = (pathToFile, newDirectory) => {
    if (!existsSync(pathToFile) || !existsSync(newDirectory)) {
        throw new Error('Operation failed');
    }

    add(newDirectory, path.basename(pathToFile));

    const rs = createReadStream(pathToFile);
    const rw = createWriteStream(path.join(newDirectory, path.basename(pathToFile)));

    rs.on('data', (data) => {
        rw.write(data.toString());
    });
};

export default cp;