function solution(sides) {
    const max = Math.max(...sides)
    const min = Math.min(...sides)
    const answer = []
    //가장 긴변이 sides에 있는 경우
    //max < min + x
    //max - min < x <= max
    for(let x=(max - min)+1; x<=max; x++){
        answer.push(x)
    }
    
    //가장 긴변이 sides에 없는 경우
    //max < x < max+min
    for(let x=max+1; x<max+min; x++){
        answer.push(x)
    }
    
    return answer.length
}