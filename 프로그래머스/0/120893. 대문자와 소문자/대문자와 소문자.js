function solution(my_string) {
    const arr = my_string.split('')
    return arr.map((char) => char >= 'a' ? char.toUpperCase() : char.toLowerCase()).join('')
    
    
}