import { readFile, existsSync } from 'fs';
import { createHash } from 'crypto';

const hash = (pathToFile) => {
    if (!existsSync(pathToFile)) {
        throw new Error('Operation failed');
    }

    readFile(pathToFile, 'utf8', (err, data) => {
        const hash = createHash('sha256').update(data).digest('hex');
        console.log(hash);
    });
};

export default hash;