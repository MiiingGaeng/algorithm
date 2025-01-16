function solution(cipher, code) {
    const arr = cipher.split('')
    let answer = []
    for(let i = 1; i * code <= arr.length; i++){
        let idx = i * code - 1
        answer.push(arr[idx])
    }
    
    return answer.join('')
}