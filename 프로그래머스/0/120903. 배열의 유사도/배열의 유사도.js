function solution(s1, s2) {
    let count = 0;
    s1.map((item) => {
        if(s2.includes(item)) count++
    })
    
    return count
}