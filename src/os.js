import os from 'os';

const getOS = (arg) => {
    arg = arg.slice(2);

    switch (arg) {
        case 'EOL':
            console.log(os.EOL);
            break;
        case 'cpus':
            console.log(`Amount of cores: ${os.cpus().length}`);
            os.cpus().forEach((core) => console.log(core.model));
            break;
        case 'username':
            console.log(os.hostname());
            break;
        case 'architecture':
            console.log(os.arch());
            break;
        case 'homedir':
            console.log(os.homedir());
            break;
        default:
            console.log('Invalid input! Please, check your command');
    }
};

export default getOS;