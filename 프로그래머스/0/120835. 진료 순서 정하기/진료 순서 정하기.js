function solution(emergency) {
    const idxArr = [...emergency].sort((a,b) => b-a)
    return emergency.map((ppl) => idxArr.indexOf(ppl) + 1)
}