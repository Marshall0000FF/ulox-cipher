const cipherKey = [
    ['a', 'y'],
    ['b', 'z'],
    ['c', 'x'],
    ['d', 'w'],
    ['e', 'u'],
    ['f', 'v'],
    ['g', 't'],
    ['h', 's'],
    ['i', 'o'],
    ['j', 'r'],
    ['k', 'q'],
    ['l', 'p'],
    ['m', 'n'],
    ['n', 'm'],
    ['o', 'i'],
    ['p', 'l'],
    ['q', 'k'],
    ['r', 'j'],
    ['s', 'h'],
    ['t', 'g'],
    ['u', 'e'],
    ['v', 'f'],
    ['w', 'd'],
    ['x', 'c'],
    ['y', 'a'],
    ['z', 'b'],
]

const upper = cipherKey
    .filter(x => x[0].match(/[a-z]/))
    .map(x => x.map(c => c.toUpperCase()))
cipherKey.push(...upper)

function cipher_encode(text) {
    let output = ''
    text.split('').forEach(c => {
        const key = cipherKey.find(x => x[0] == c)

        if (key == undefined) output += c
        else output += key[1]
    });
    return output
}

function cipher_decode(text) {
    let output = ''
    text.split('').forEach(c => {
        const key = cipherKey.find(x => x[1] == c)

        if (key == undefined) output += c
        else output += key[0]
    });
    return output
}

const message = 'The quick brown fox jumps over the lazy dog...'

const encodedMessage = cipher_encode(message)
const decodedMessage = cipher_decode(encodedMessage)

console.log({message, encodedMessage, decodedMessage})