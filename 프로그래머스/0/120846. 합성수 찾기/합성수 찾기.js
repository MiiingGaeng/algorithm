function solution(n) {
    const arr = [];
    for(let num=1; num<=n; num++){    
        let count = 0
        for(let i=1; i<=num; i++){
            if(num % i === 0) count++
        }
        
        if(count >= 3) arr.push(num)
    }
    
    return arr.length
}