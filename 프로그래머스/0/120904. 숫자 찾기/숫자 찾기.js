function solution(num, k) {
    const numArr = num.toString().split('')
    const idx =  numArr.indexOf(k.toString())
    
    return idx>=0 ? idx + 1 : idx
}