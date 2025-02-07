function solution(a, b) {
    const funcGCD = (a, b) => {return a % b === 0 ? b : funcGCD(b, a % b)};
    const gcd = funcGCD(a,b)
    let reducedD = b / gcd
    
    while(reducedD % 2 === 0){
        reducedD /= 2
    }
    
    while(reducedD % 5 === 0){
        reducedD /= 5
    }
    
    return reducedD === 1 ? 1 : 2
}