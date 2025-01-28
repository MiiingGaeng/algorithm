function solution(my_string) {
    const arrS = my_string.split(' ')
    let answer = parseInt(arrS[0])
    
    for(let i=1; i<arrS.length; i++){
        if(arrS[i] === '+'){answer += parseInt(arrS[i+1])}
        else if(arrS[i] === '-'){answer -= parseInt(arrS[i+1])}
        else{continue}
    }
    
    return answer
}