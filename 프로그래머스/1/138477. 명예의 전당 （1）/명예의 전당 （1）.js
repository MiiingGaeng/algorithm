function solution(k, score){
  const answer = [];
  const honor = [];

  for(let i=0; i<score.length; i++){
    if(honor.length < k){
      honor.push(score[i])
      honor.sort((a,b) => a-b)
    }else{
      honor.push(score[i])
      honor.sort((a,b) => a-b)
      honor.shift()
    }

    answer.push(honor[0])
  }

  return answer
}