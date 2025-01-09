function solution(my_string, n) {
    const arr = my_string.split('')
    return arr.map((char) => char.repeat(n)).join('')
}