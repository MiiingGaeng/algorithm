function solution(num1, den1, num2, den2) {
    let answer = []
    //공통분모, 새로운 분자 구하기
    const denoms = den1 * den2
    const numers = num1*den2 + num2*den1
    
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a%b)
    const divisor = gcd(numers, denoms)
    
    answer[0] = numers / divisor
    answer[1] = denoms / divisor
    
    return answer
}