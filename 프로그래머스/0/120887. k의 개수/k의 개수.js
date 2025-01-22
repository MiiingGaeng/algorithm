function solution(i, j, k) {
    let count = 0;
    
    for(i; i <= j; i++){
        const splitedNum = i.toString().split('')
        splitedNum.map((num) => {
            if(num.includes(k.toString())) count++
        })
    }
    
    return count
}