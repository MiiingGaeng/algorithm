function solution(s) {
   const arrS = s.split(' ')
   let answer = 0;

   for(let i=0; i<arrS.length; i++){
       arrS[i] !== 'Z' ? answer += parseInt(arrS[i]) : answer -= parseInt(arrS[i-1])
   }
    
    return answer
}