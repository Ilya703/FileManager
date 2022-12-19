import { existsSync, createReadStream, renameSync } from 'fs';
import path from 'path';

const rn = (oldPath, newFile) => {
    if (!existsSync(oldPath)) {
        throw new Error('Operation failed');
    }

    const newPath = path.join(oldPath, '..', newFile);

    renameSync(oldPath, newPath);
};

export default rn;