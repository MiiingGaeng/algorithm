function solution(string) {
    return arrS = string.split('').filter((char, idx, arr) => arr.indexOf(char) === idx).join('')
}