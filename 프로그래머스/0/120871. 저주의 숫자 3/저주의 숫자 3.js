function solution(n) {
    let answer = 0
    
    for(let i=1; i <= n; i++){
        answer += 1
        
        while(true){
            if(answer % 3 === 0 || answer.toString().includes('3')){
                answer += 1
                
                continue
            }
            break
        }
    }
    
    return answer
}