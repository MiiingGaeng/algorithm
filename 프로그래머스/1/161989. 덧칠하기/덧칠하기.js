function solution(n, m, section) {
    //페인트칠 n미터, 롤러길이 m미터, 칠해야 하는 구역 section
    
    //칠하는 횟수
    let answer = 0;
    //칠한 구역
    let painted = 0;
    
    for(let i=0; i<section.length; i++){
        //칠하지 않은 구역 칠하기
        if(painted < section[i]){
            painted = section[i] + m - 1
            answer++
        }
    }
    
    return answer
}