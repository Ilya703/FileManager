import { readdirSync, existsSync } from 'fs';

const ls = (__dirname) => {
    const items = readdirSync(__dirname, { withFileTypes: true });
    const dirs = [];
    const files = [];

    if (!existsSync(__dirname)) {
        throw new Error('Operation failed');
    }

    for(let item of items) {
        if (item.isFile()) files.push({ Name: item.name, Type: 'file' });
        else dirs.push({ Name: item.name, Type: 'directory' });
    }

    dirs.sort();
    files.sort();

    return { files, dirs };
};

export default ls;