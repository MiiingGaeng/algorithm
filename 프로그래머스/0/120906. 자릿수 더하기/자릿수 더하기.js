function solution(n) {
    let answer = 0;
    String(n).split('').forEach((num) => answer += Number(num))
    
    return answer
}