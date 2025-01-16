function solution(string) {
    const arr = string.split('')
    const numArr = arr.filter((item) => Number.parseInt(item) || item === '0' )
    return numArr.sort((a,b) => a -b).map((item) => Number.parseInt(item))
}