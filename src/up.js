import path from 'path';

const up = (__dirname, root) => {
    let temp = path.join(__dirname, '..');
    
    if (temp !== root) {
        return temp;
    } else {
        return root;
    }
};

export default up;