function solution(my_string) {
    let answer = 0;
    const findNum = my_string.split('').filter((char) => parseInt(char, 10))
    
    findNum.forEach((num) => answer += Number(num))
    return answer
}