import { writeFileSync } from 'fs';
import path from 'path';

const add = (__dirname, fileName) => {
    const newPath = path.join(__dirname, fileName);

    writeFileSync(newPath, '');
};

export default add;