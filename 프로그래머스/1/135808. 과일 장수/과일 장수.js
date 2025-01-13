function solution(k, m, score) {
    //k=최상품, m=한 상자에 들어가는 사과 개수, score=사과 점수(배열)
    let maxPrice = 0;
    
    score = score.sort((a,b) => b-a);
    let totalBox = Math.floor(score.length / m)
    
    for(let i=0; i<totalBox; i++){
        let box = score.slice(i*m, (i+1)*m)
        maxPrice += box[m-1] * m
    }
    
    return maxPrice
}