function solution(common) {
    //등차수열?
    if(common[1]-common[0] === common[2]-common[1]){
        const gap = common[1]-common[0]
        return common[common.length-1] + gap
    }
    
    //등비수열?
    if(common[1] / common[0] === common [2]/ common[1]){
        const gap = common[1] / common[0]
        return common[common.length-1] * gap
    }
}