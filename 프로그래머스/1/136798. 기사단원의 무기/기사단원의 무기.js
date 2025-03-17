function solution(number, limit, power) {
    const getPower = (n) => {
        let count = 0
        for(let i=1; i**2<=n; i++){
            if(n%i === 0){
                count += (i * i === n) ? 1 : 2;
            }
        }
        return count
    }
    
    let totalPower = 0
    
    for(let i=1; i<=number; i++){
        let soldierPower = getPower(i)
        totalPower += soldierPower > limit ? power : soldierPower
    }
    
    return totalPower
}