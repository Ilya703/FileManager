const parseArgs = () => {
    const argv = process.argv;
    let answer = '';

    for(let i = 0; i < argv.length; i++) {
        if(argv[i].startsWith('--username')) {
            answer = argv[i].split('=')[1];
        }
    }

    return answer
};

export default parseArgs;