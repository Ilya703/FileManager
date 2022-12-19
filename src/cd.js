import path from 'path';

const cd = (newPath, __dirname) => {
    if (path.isAbsolute(newPath)) return newPath;
    else return path.join(__dirname, path.relative(__dirname, newPath));
}

export default cd;