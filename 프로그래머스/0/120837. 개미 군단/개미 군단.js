function solution(hp) {
    //genAnt와 solAnt는 각각 몇마리씩 필요한지 계산하는 변수
    const gen = Math.floor(hp/5);
    const sol = Math.floor((hp - gen*5) / 3)
    const work = hp - gen*5 - sol*3

    return gen + sol + work
    
}