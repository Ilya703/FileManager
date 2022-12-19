import { rmSync } from 'fs';
import cp from '../src/cp.js';

const mv = (pathToFile, newDirectory) => {
    cp(pathToFile, newDirectory);

    rmSync(pathToFile);
};

export default mv;