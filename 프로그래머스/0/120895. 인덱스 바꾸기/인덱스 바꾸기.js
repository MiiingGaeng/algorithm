function solution(string, num1, num2) {
    const str1 = string.slice(num1, num1+1)
    const str2 = string.slice(num2, num2+1)
    const strArr = string.split('')
    
    strArr[num1] = str2
    strArr[num2] = str1
    
    return strArr.join('')
}