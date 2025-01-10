function solution(box, n) {
    let answer = 1;
    box.forEach((num) => answer*= Math.floor(num / n))
    
    return answer
}