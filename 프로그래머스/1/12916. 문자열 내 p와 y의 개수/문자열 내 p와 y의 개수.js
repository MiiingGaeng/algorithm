function solution(string) {
    const arrString = string.toLowerCase().split('')
    const arrP = arrString.filter((char) => char === 'p')
    const arrY = arrString.filter((char) => char === 'y')
    
    return arrP.length === arrY.length ? true : false
}