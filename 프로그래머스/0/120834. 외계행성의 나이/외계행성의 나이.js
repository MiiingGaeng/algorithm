function solution(age) {
    const arrChar = 'abcdefghijklmnopqrstuvwxyz'
    const arrAge = String(age).split('')
    
    return arrAge.map((num) => arrChar.charAt(num)).join('')
}