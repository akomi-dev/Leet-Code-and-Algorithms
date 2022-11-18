const readFile = filename => { return require('fs').readFileSync(filename, 'utf-8'); };

const text = readFile("Advent of Code 2020\\Day 2\\input.txt").split("\r\n");

const part1 = (text) => {
    let valid = 0;

    for (let i=0; i<=text.length; i++) {
        let t = text[i].split(": "); // restraints , password
        let r = t[0].split(" "); // amount , letter
        let e = r[0].split("-"); // range

        let password = text[1].split("");

        let contains = 0;
        for (let j; j<=password;j++) {
            if (password[j] == r[1]) contains++;
        };

        if (contains > e[0] && contains < e[1]) valid ++;
    }
    return text[0].split(": ");
};

const part2 = (text) => {
    return 0;
};

console.log(`Part 1: ${part1(text)}`);
console.log(`Part 2: ${part2(text)}`);

// console.log(text)
