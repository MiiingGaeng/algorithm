function solution(lottos, winNums) {
    let best = 0
    let worst = 0
    
    let count = 0
    for(let i=0; i<lottos.length; i++){       
        for(let j=0; j<winNums.length; j++){
            if(lottos[i] === winNums[j]){
                count++
                winNums.splice(j, 1)
            }
        }
    }
    
    //0을 제외한 숫자 먼저 처리 = 최저순위
    switch(count){
        case 0 : 
            worst = 6
            break;
        case 1 : 
            worst = 6
            break;
        case 2 : 
            worst = 5
            break
        case 3 : 
            worst = 4
            break
        case 4 : 
            worst = 3
            break
        case 5 : 
            worst = 2
                break
        case 6 : 
            worst = 1
            break
    }
    
    //0을 포함한 등수 처리 = 최고 순위
    count += lottos.filter((num) => num === 0).length
    switch(count){
            case 0 : 
            best = 6
            break;
        case 1 : 
            best = 6
            break;
        case 2 : 
            best = 5
            break
        case 3 : 
            best = 4
            break
        case 4 : 
            best = 3
            break
        case 5 : 
            best = 2
            break 
        case 6 : 
            best = 1
            break
    }
    
    return [best, worst]
}