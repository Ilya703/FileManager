import { existsSync, createReadStream } from 'fs';

const cat = (__dirname) => {
    if (!existsSync(__dirname)) {
        throw new Error('Operation failed');
    }

    const rs = createReadStream(__dirname);

    rs.on('data', (data) => {
        process.stdout.write(data.toString());
    });
};

export default cat;