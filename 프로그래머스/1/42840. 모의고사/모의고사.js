function solution(answers) {
    const supo1 = [1,2,3,4,5]
    const supo2 = [2,1,2,3,2,4,2,5]
    const supo3 = [3,3,1,1,2,2,4,4,5,5]
    
    let scores = [0,0,0]
    
    //answers에서 정답개수 찾기
    for(let i=0; i<answers.length; i++){
        if(answers[i] === supo1[i%supo1.length]){scores[0]++}
        if(answers[i] === supo2[i%supo2.length]){scores[1]++}
        if(answers[i] === supo3[i%supo3.length]){scores[2]++}
    }
    //최대점수 찾기
    const maxScore = Math.max(...scores)
    //최대점수를 가진 사람의 인덱스 맵핑 + 정답자만 필터링
    return scores.map((score, idx) => {
        return score === maxScore ? score = idx + 1 : score = 0
    }).filter((supo) => supo > 0)
}