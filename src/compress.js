import { pipeline, Readable, Writable } from 'stream';
import { createBrotliCompress } from 'zlib';

const compress = (pathToFile, pathToDestination) => {
    if (!existsSync(pathToFile)) {
        throw new Error('Operation failed');
    }

    const rs = new Readable(pathToFile);
    const ws = new Writable(pathToDestination);

    const gzip = createBrotliCompress();

    pipeline(rs, gzip, ws, (err) => {});
};

export default compress;