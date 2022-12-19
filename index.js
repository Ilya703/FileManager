import process from 'process';
import { fileURLToPath } from 'url';
import path from 'path';

import consolePhrases from './src/consolePhrases.js';
import parseArgs from './src/extricateName.js';
import up from './src/up.js';
import ls from './src/ls.js';
import cd from './src/cd.js';
import cat from './src/cat.js';
import add from './src/add.js';
import rn from './src/rn.js';
import cp from './src/cp.js';
import mv from './src/mv.js';
import rm from './src/rm.js';
import getOS from './src/os.js';
import hash from './src/hash.js';
import compress from './src/compress.js';
import decompress from './src/decompress.js';

const name = parseArgs();
let __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.parse(__dirname).root;

console.log(`Welcome to the File Manager, ${name}!`);
consolePhrases(__dirname);

process.stdin.on('data', command => {
    command = command.toString().trim().split(' ');

    try {
        switch (command[0]) {
            case 'up':
                __dirname = up(__dirname, root);
                break;
            case 'cd':
                if (command.length === 1) console.log('Invalid input! Please, check your command');
                else __dirname = cd(command[1], __dirname);
                break;
            case 'ls':
                const { files, dirs } = ls(__dirname);
                console.table([...dirs, ...files]);
                break;
            case 'cat':
                if (command.length === 1) console.log('Invalid input! Please, check your command');
                else cat(command[1]);
                break;
            case 'add':
                if (command.length === 1) console.log('Invalid input! Please, check your command');
                else add(__dirname, command[1]);
                break;
            case 'rn':
                if (command.length <= 2) console.log('Invalid input! Please, check your command');
                else rn(command[1], command[2]);
                break;
            case 'cp':
                if (command.length <= 2) console.log('Invalid input! Please, check your command');
                else cp(command[1], command[2]);
                break;
            case 'mv':
                if (command.length <= 2) console.log('Invalid input! Please, check your command');
                else mv(command[1], command[2]);
                break;
            case 'rm':
                if (command.length === 1) console.log('Invalid input! Please, check your command');
                else rm(command[1]);
                break;
            case 'os':
                if (command.length === 1) console.log('Invalid input! Please, check your command');
                getOS(command[1]);
                break;
            case 'hash':
                if (command.length === 1) console.log('Invalid input! Please, check your command');
                hash(command[1]);
                break;
            case 'compress':
                if (command.length <= 2) console.log('Invalid input! Please, check your command');
                else compress(command[1], command[2]);
                break;
            case 'decompress':
                if (command.length <= 2) console.log('Invalid input! Please, check your command');
                else decompress(command[1], command[2]);
                break;
            default:
                console.log('Unknown command! Please, check your command');
        }
    
        consolePhrases(__dirname);
    } catch (e) {
        console.log('Operation failed! Try again');
    }
});

process.on('exit', () => {
    console.log(`Thank you for using File Manager, ${name}, goodbye!`);
});

process.on('destroy', () => {
    console.log(`Thank you for using File Manager, ${name}, goodbye!`);
});


