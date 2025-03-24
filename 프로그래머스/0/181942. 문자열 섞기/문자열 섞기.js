function solution(str1, str2) {
    let result = []
    
    const arr1 = str1.split('')
    const arr2 = str2.split('')
    
    for(let i=0; i<arr1.length ;i++){
        result.push(arr1[i], arr2[i])
    }
    
    return result.join('')
}