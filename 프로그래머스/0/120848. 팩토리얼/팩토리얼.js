function solution(n) {
    let facI = 1;
    let i = 0;
    
    while(facI <= n){
        i++
        facI *= i
    }
    
    return i -1
}