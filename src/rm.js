import { rmSync, existsSync } from 'fs';

const rm = (pathToFile) => {
    if (!existsSync(pathToFile)) {
        throw new Error('Operation failed');
    }

    rmSync(pathToFile);
};

export default rm;