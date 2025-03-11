function solution(numlist, n) {
    const compareFn = (a,b,n) => {
        const gapA = Math.abs(a - n)
        const gapB = Math.abs(b - n)
        
        if(gapA === gapB) return b - a
        return gapA - gapB
    }
    
    return numlist.sort((a,b) => compareFn(a, b, n))
}