const readFile = filename => { return require('fs').readFileSync(filename, 'utf-8'); };

const text = readFile("Advent of Code 2020\\Day 1\\input.txt").split("\r\n");

const part1 = (text) => {
    for (let i = 0; i <= text.length; i++) {
        for (let j = 0; j <= text.length-1; j++) {

            const I = parseInt(text[i]);
            const J = parseInt(text[j]);

            if (I + J == 2020) {
                return I * J;
            };
        };
    };
};

const part2 = (text) => {
    for (let i = 0; i <= text.length; i++) {
        for (let j = 0; j <= text.length; j++) {
            for (let k = 0; k <= text.length; k++) {

                const I = parseInt(text[i]);
                const J = parseInt(text[j]);
                const K = parseInt(text[k]);
    
                if (I + J + K == 2020) {
                    return I * J * K;
                };
            };
        };
    };
};

console.log(`Part 1: ${part1(text)}`);
console.log(`Part 2: ${part2(text)}`);
