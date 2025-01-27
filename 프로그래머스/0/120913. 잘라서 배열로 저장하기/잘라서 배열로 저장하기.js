function solution(my_str, n) {
    const arrStr = my_str.split('')
    const answer = []
    
    while(arrStr.length > 0){
        answer.push(arrStr.splice(0, n).join(''))
    }
    
    return answer
}