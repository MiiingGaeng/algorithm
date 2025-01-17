function solution(numbers) {
    const total = 1+2+3+4+5+6+7+8+9;
    let answer = 0;
    
    numbers.map((num) => answer += num)
    
    return total - answer
}