function solution(polynomial) {
    const splitedPoly = polynomial.split(' + ')
    const nArr = splitedPoly.filter((num) => !num.includes('x'))
    const xArr = splitedPoly.filter((num) => num.includes('x'))
    
    let numX = xArr.length > 0 ? xArr.map((itemX) => +itemX.replace('x', '') ? +itemX.replace('x', '') : 1).reduce((acc, cur) => acc += cur, 0) : ''
    let numN = nArr.length > 0 ? nArr.map((itemN) => +itemN).reduce((acc, cur) => acc += cur, 0) : ''
    
    if(numX && numN) return `${numX === 1 ? "" : numX}x + ${numN}`
    if(!numX) return String(numN)
    if(!numN) return `${numX === 1 ? "" : numX}x`
}