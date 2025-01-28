function solution(numbers, k) {
    let idx = 0;
    
    for(let i = 0; i<k; i++){
        idx += 2;
        if(idx > numbers.length) {
            idx -= numbers.length
        }
    }
    
    return idx-2 > 0 ? numbers[idx-2] : numbers[numbers.length + (idx-2)]
}