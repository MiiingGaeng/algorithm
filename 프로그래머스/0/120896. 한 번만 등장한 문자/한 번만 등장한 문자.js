function solution(s) {
    const arrS = s.split('')
    const result = []
    arrS.forEach((char) => {
        return s.indexOf(char) === s.lastIndexOf(char) ? result.push(char) : result
    })
    
    return result.sort().join('')
}