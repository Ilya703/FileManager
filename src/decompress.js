import { pipeline, Readable, Writable } from 'stream';
import { createBrotliDecompress } from 'zlib';

const decompress = (pathToFile, pathToDestination) => {
    if (!existsSync(pathToFile)) {
        throw new Error('Operation failed');
    }

    const rs = new Readable(pathToFile);
    const ws = new Writable(pathToDestination);

    const gzip = createBrotliDecompress();

    pipeline(rs, gzip, ws, (err) => {});
};

export default decompress;