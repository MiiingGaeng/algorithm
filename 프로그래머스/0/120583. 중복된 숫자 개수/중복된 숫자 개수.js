function solution(array, n) {
    const answer = [];
    array.filter((num) => {
        if(num === n) answer.push(num)
    })
    
    return answer.length
}