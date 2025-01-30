function solution(balls, share) {
    //경우의수 공식 = (n-m)! * m! / n!
    
    const factorial = (n) => {
        let result = 1;
        for(let i=1; i<=n; i++){
            result *= i
        }
        return result
    }

    return Math.round(factorial(balls) / (factorial(balls-share) * factorial(share)))
}