function solution(array, n) {
    const newArr = [...array, n].sort((a,b) => a-b)
    const idxN = newArr.indexOf(n)
    
    if(idxN === newArr.length - 1) return newArr[idxN - 1]
    if(idxN === 0) return newArr[1]
    
    const compareBefore = n - newArr[idxN - 1]
    const compareAfter = newArr[idxN + 1] - n
    
    console.log("newArr =", newArr)
    console.log("idxN =", idxN)
    console.log("compareBefore =", compareBefore)
    console.log("compareAfter =", compareAfter)
    
    return compareBefore <= compareAfter ? newArr[idxN - 1] : newArr[idxN + 1]
}