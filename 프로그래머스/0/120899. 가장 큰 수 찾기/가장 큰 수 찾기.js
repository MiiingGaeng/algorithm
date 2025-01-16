function solution(array) {
    const maxNum = Math.max(...array)
    const maxIdx = array.indexOf(maxNum)
    
    return [maxNum, maxIdx]
}